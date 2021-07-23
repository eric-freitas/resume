import { AzureFunction, Context, HttpRequest } from "@azure/functions"

import { exportError } from '../src/utils/routes';
import ContactInfoController from '../src/controllers/contactInfo';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const lang = (req.query.lang || (req.body && req.body.lang));
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