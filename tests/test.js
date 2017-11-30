const test = require("tape");
const shot = require("shot");
const router = require("../src/router");

test("Test for the unknow route", function(t) {
  shot.inject(router, { method: "get", url: "/random" }, res => {
    t.equal(res.statusCode, 404, "should respond with status code of 404");
    t.equal(
      res.payload,
      "File not found",
      "Should Respones with File not found"
    );
    t.end();
  });
});

test("Handeling a js file", function(t) {
  shot.inject(router, { method: "get", url: "/public/dom.js" }, res => {
    t.equal(res.statusCode, 200, "should respond with status code of 200");
    t.equal(
      res.headers["content-type"],
      "application/javascript",
      "The content type should be application javascript"
    );
    t.end();
  });
});

test("Handeling a css file", function(t) {
  shot.inject(router, { method: "get", url: "/public/style.css" }, res => {
    t.equal(res.statusCode, 200, "should respond with status code of 200");
    t.equal(
      res.headers["content-type"],
      "text/css",
      "The content type should be text css"
    );
    t.end();
  });
});
