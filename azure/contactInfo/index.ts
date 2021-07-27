import { AzureFunction, Context, HttpRequest } from "@azure/functions"

import { exportError } from '../src/utils/routes';
import ContactInfoController from '../src/controllers/contactInfo';

/**
 * contactInfo AzureFunction
 * loads contact info data from postgres
 * path "contact_info/{lang:alpha?}"
 *
 * @param {Context} context
 * @param {HttpRequest} req
 * @return {*}  {Promise<void>}
 */
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const lang =  context.bindingData?.lang ||  req.query?.lang || req.body?.lang || "";
    let response = { status: 200, body: null };

    try {
        const controller = new ContactInfoController();
        const result = await controller.list(lang);
        if (result) {
            response.body = result;
        } else {
            response.status = 404;
        }
    } catch (e) {
        response.status   = 500;
        response.body = exportError(e);
    }

    context.res = response;
};

export default httpTrigger;