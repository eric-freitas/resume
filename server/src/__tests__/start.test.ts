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

                    expect(element).toMatchSnapshot({
                        name        : expect.any(String),
                        level       : expect.any(Number),
                        maxLevel    : expect.any(Number)
                    })

                    expect(element.level).toBeLessThanOrEqual(element.maxLevel);
                    expect(element.name).not.toBeEmpty();
                });
            done();
        });
    })

});
  