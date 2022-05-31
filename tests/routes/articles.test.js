const request = require("supertest");
const assert = require("assert");
const { SERVER_URL } = require("../../constants");
const { mockArticles } = require("../../database/mockData");

describe("Test GET /api/articles", () => {
  it("responds with json", (done) => {
    request(SERVER_URL)
      .get("/api/articles")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const expected = mockArticles;
        const actual = response.body;
        assert.deepEqual(expected, actual);
        done();
      })
      .catch((err) => done(err));
  });
});

describe("Test POST /api/articles", () => {
  it("responds with json", (done) => {
    const testData = {
      _id: "6281997e628855a5dddab33a",
      title: "Article Test",
      authors: "Doe, J.",
      source: "EASE",
      pubyear: 2022,
      doi: "https://doi.org/23.4242/41241555.4214242",
      claim: "good code quality",
      evidence: "good support",
      sepractice: "TDD",
      moderated: false,
      approved: false,
    };

    request(SERVER_URL)
      .post("/api/articles")
      .send(testData)
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const expected = "Article added successfully";
        const actual = response.body.msg;
        assert(actual, expected);
        done();
      })
      .catch((err) => done(err));
  });
});

describe("Test PUT /api/articles/moderate/:id", () => {
  it("responds with json", (done) => {
    const testId = "6281997e628855a5dddab33a";

    request(SERVER_URL)
      .put(`/api/articles/moderate/${testId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const expected = "Article moderated successfully";
        const actual = response.body.msg;
        assert(actual, expected);
        done();
      })
      .catch((err) => done(err));
  });
});

describe("Test DELETE /api/articles/:id", () => {
  it("responds with json", (done) => {
    const testId = "6281997e628855a5dddab33a";

    request(SERVER_URL)
      .delete(`/api/articles/${testId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const expected = "Article deleted successfully!";
        const actual = response.body.msg;
        assert(actual, expected);
        done();
      })
      .catch((err) => done(err));
  });
});
