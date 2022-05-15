const request = require("supertest");
const assert = require("assert");
const { serverUrl } = require("../../constants");
const { mockArticles } = require("../../database/mockData");
const { dropMongoDbProperties } = require("../../utilities");

describe("Test GET /api/articles", () => {
    it("responds with json", (done) => {
        request(serverUrl)
            .get("/api/articles")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                const expected = mockArticles;
                const actual = dropMongoDbProperties(response.body);
                assert.deepEqual(expected, actual);
                done();
            })
            .catch(err => done(err));
    });
});

describe("Test POST /api/articles", () => {
    it("responds with json", (done) => {
        const testData = {
            "title": "Article Test",
            "authors": "Doe, J.",
            "source": "EASE",
            "pubyear": 2022,
            "doi": "https://doi.org/23.4242/41241555.4214242",
            "claim": "good code quality",
            "evidence": "good support",
            "sepractice": "TDD"
        }

        request(serverUrl)
            .post("/api/articles")
            .send(testData)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                const expected = "Article added successfully!";
                const actual = response.body.msg;
                assert(actual, expected);
                done();
            })
            .catch(err => done(err));
    });
});