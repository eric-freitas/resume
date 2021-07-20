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

    });

    it ('should list /contact_info', (done) => {
        request(app)
            .get("/contact_info/pt")
            .then(response => {
                expect((response as any).statusCode).toBe(200);
                const _d = response.body;
                expect(_d).not.toBeNull()
                expect(_d).toBeArray()
                expect(_d).not.toBeArrayOfSize(0);
               
                _d.forEach(element => {
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

                done();
            });
    });

    it ('should list /education', (done) => {
        request(app)
        .get("/education/pt")
        .then(response => {
            expect((response as any).statusCode).toBe(200);
            const _d = response.body;
            expect(_d).not.toBeNull()
            expect(_d).toBeArray()
            expect(_d).not.toBeArrayOfSize(0);

            _d.forEach(element => {
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

            })

            done();
        });
    });

    it ('should list /experience', (done) => {
        request(app)
        .get("/experience/pt")
        .then(response => {
            expect((response as any).statusCode).toBe(200);
            const _d = response.body;
            expect(_d).not.toBeNull()
            expect(_d).toBeArray()
            expect(_d).not.toBeArrayOfSize(0);

            _d.forEach(element => {
                expect(element).not.toBeNull();
                expect(element).toBeObject();

                /*company      : string,
                position     : string,
                conclusion   : string,
                start        : string,
                attribution? : ExperienceAttribution[]*/

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
            
            done();
        });
    });

});
  