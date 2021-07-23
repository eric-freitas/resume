import 'jest-extended';
import httpFunction from '../experience/index'
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
            expect(element).not.toBeNull();
            expect(element).toBeObject();

            expect(element).toHaveProperty('company');
            expect(element.company).toBeString();
            expect(element.company).not.toBeNull();
            expect(element.company).not.toBeEmpty();

            expect(element).toHaveProperty('position');
            expect(element.position).toBeString();
            expect(element.position).not.toBeNull();
            expect(element.position).not.toBeEmpty();          

            expect(element).toHaveProperty('conclusion');
            expect(element.conclusion).toBeString();
            expect(element.conclusion).not.toBeNull();
            expect(element.conclusion).not.toBeEmpty();     

            expect(element).toHaveProperty('start');
            expect(element.start).toBeString();
            expect(element.start).not.toBeNull();
            expect(element.start).not.toBeEmpty();        
            
            const _detail = element.detail;
            if (_detail !== undefined) {
                expect(_detail).toBeString();
                expect(_detail).not.toBeNull();
                expect(_detail).not.toBeEmpty();     
            }

            const checkForAttributions = (_el) => {

                expect(_el).not.toBeNull();
                expect(_el).toBeArray();
                expect(_el).not.toBeArrayOfSize(0);

                _el.forEach(_attr => {
                    expect(_attr).toBeObject();
                    expect(_attr).not.toBeNull();

                    expect(_attr).toHaveProperty('text');
                    expect(_attr.text).toBeString();
                    expect(_attr.text).not.toBeNull();
                    expect(_attr.text).not.toBeEmpty();

                    const _subItens = _attr.attribution;
                    if (_subItens !== undefined) {
                        checkForAttributions(_subItens);
                    }

                });
            };

            const _attributions = element.attribution;
            if (_attributions !== undefined) {
                checkForAttributions(_attributions);
            }
        });

    })

});
  