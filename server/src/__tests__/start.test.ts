import 'jest-extended';
import request from 'supertest';
import server from '../index';

let app:any = server;


describe ("resume test", () => {

    it ('should access "/"', (done) => {
        request(app)
            .get("/")
            .then(response => {
            expect((response as any).statusCode).toBe(200);
            done();
        });
    })

	it ('should access "/test"', (done) => {
        
        request(app)
            .get("/test/1")
            .then(response => {
                expect((response as any).statusCode).toBe(200);
                const _d = response.body;
                expect(_d).not.toBeNull()
                expect(_d).toBeObject();
                const { id } = _d;
                expect(id).toBe(1);
            done();
        });
    })

    it ('should list "/skills"', (done) => {
        
        request(app)
            .get("/skills/pt")
            .then(response => {
                expect((response as any).statusCode).toBe(200);
                const _d = response.body;
                expect(_d).not.toBeNull()
                expect(_d).toBeArray()
                expect(_d).not.toBeArrayOfSize(0)

                _d.forEach(element => {
                    expect(element).toBeObject();
                    expect(element).not.toBeNull();

                    expect(element).toHaveProperty('name');
                    expect(element.name).not.toBeNull();
                    expect(element.name).toBeString();
                    expect(element.name).not.toBeEmpty();

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
            done();
        });
    })

});
  