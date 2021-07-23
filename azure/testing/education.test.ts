import 'jest-extended';
import httpFunction from '../education/index'
import context from './defaultContext'

const config = require('../local.settings.json')
process.env = Object.assign(process.env, {...config.Values});


describe ("resume test", () => {


    const request = {
        query: { lang: 'pt' }
    };

    it ('should list education', async() => {
        await httpFunction(context, request);

        const res = context.res;
        expect(res).not.toBeNull();
        expect(res).toBeObject();

        const { status, body } = res;
        expect(status).toBe(200);
        expect(body).not.toBeNull()
        expect(body).toBeArray()
        expect(body).not.toBeArrayOfSize(0)

        body.forEach(element => {
            expect(element).not.toBeNull();
            expect(element).toBeObject();

            expect(element).toHaveProperty('title');
            expect(element.title).toBeString();
            expect(element.title).not.toBeNull();
            expect(element.title).not.toBeEmpty();

            expect(element).toHaveProperty('institution');
            expect(element.institution).toBeString();
            expect(element.institution).not.toBeNull();
            expect(element.institution).not.toBeEmpty();

            expect(element).toHaveProperty('conclusion');
            expect(element.conclusion).toBeString();
            expect(element.conclusion).not.toBeNull();
            expect(element.conclusion).not.toBeEmpty();     
            
            const _detail = element.detail;
            if (_detail !== undefined) {
                expect(element.detail).toBeString();
                expect(element.detail).not.toBeNull();
                expect(element.detail).not.toBeEmpty();     
            }

        });

    })

});
  