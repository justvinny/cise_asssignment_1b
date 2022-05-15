const request = require("supertest");
const assert = require("assert");
const { SERVER_URL } = require("../../constants");
const { mockPractices } = require("../../database/mockData");
const { dropMongoDbProperties } = require("../../utilities");

describe("Test GET /api/practices", () => {
    it("responds with json", (done) => {
        request(SERVER_URL)
            .get("/api/practices")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                const expected = mockPractices;
                const actual = dropMongoDbProperties(response.body);
                assert.deepEqual(expected, actual);
                done();
            })
            .catch(err => done(err));
    });
});

describe("Test POST /api/practices", () => {
    it("responds with json", (done) => {
        request(SERVER_URL)
            .post("/api/practices")
            .send({practice: "Testing Practice Type"})
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                const expected = "Practice added successfully";
                const actual = response.body.msg;
                assert(actual, expected);
                done();
            })
            .catch(err => done(err));
    });
});