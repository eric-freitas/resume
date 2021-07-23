import 'jest-extended';
import httpFunction from '../contactInfo/index'
import context from './defaultContext'

const config = require('../local.settings.json')
process.env = Object.assign(process.env, {...config.Values});

describe ("resume test", () => {

    const request = {
        query: { lang: 'pt' }
    };

    it ('should list contact info', async() => {
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
            expect(element).toBeObject();
            expect(element).not.toBeNull();
            
            expect(element).toHaveProperty('icon')
            expect(element.icon).toBeObject();
            expect(element.icon).not.toBeNull();
            
            expect(element.icon).toHaveProperty('lib');
            expect(element.icon.lib).toBeString();
            expect(element.icon.lib).not.toBeNull();
            expect(element.icon.lib).not.toBeEmpty();

            expect(element.icon).toHaveProperty('name');
            expect(element.icon.name).toBeString();
            expect(element.icon.name).not.toBeNull();
            expect(element.icon.name).not.toBeEmpty();

            expect(element).toHaveProperty('text')
            expect(element.text).toBeString();
            expect(element.text).not.toBeNull();
            expect(element.text).not.toBeEmpty();

            expect(element).toHaveProperty('linkTo')
            expect(element.linkTo).toBeString();
            expect(element.linkTo).not.toBeNull();
            expect(element.linkTo).not.toBeEmpty();

            expect(element).toHaveProperty('hint')
            expect(element.hint).toBeString();
            expect(element.hint).not.toBeNull();
            expect(element.hint).not.toBeEmpty();

        });

    })

});
  