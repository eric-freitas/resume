import 'jest-extended';
import httpFunction from '../skills/index'
import context from './defaultContext'

const config = require('../local.settings.json')
process.env = Object.assign(process.env, {...config.Values});


describe ("resume test", () => {


    const request = {
        query: { lang: 'pt' }
    };

    it ('should list skills', async() => {
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

            expect(element).toHaveProperty('name');
            expect(element.name).not.toBeNull();
            expect(element.name).toBeString();
            expect(element.name).not.toBeEmpty();


            expect(element).toHaveProperty('title');
            expect(element.title).not.toBeNull();
            expect(element.title).toBeString();
            expect(element.title).not.toBeEmpty();

            expect(element).toHaveProperty('skills');
            expect(element.skills).not.toBeNull();
            expect(element.skills).toBeArray();
            expect(element.skills).not.toBeArrayOfSize(0);

            element.skills.forEach(skill => {
                
                expect(skill).toHaveProperty('name');
                expect(skill.name).not.toBeNull();
                expect(skill.name).toBeString();
                expect(skill.name).not.toBeEmpty();

                expect(skill).toHaveProperty('maxLevel');
                expect(skill.maxLevel).not.toBeNull();
                expect(skill.maxLevel).toBeNumber();
                expect(skill.maxLevel).toBeGreaterThan(0);

                expect(skill).toHaveProperty('level');
                expect(skill.level).not.toBeNull();
                expect(skill.level).toBeNumber();
                expect(skill.level).toBeLessThanOrEqual(skill.maxLevel);
                expect(skill.level).toBeGreaterThanOrEqual(0);
                

                if (skill.text !== undefined) {
                    expect(skill.text).not.toBeNull();
                    expect(skill.text).toBeString();
                    expect(skill.text).not.toBeEmpty();
                }
            })

        });

    })

});
  