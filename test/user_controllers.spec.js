const chai = require("chai");
const sinon = require("sinon");
const UserRepository = require("./");
const expect = chai.expect;
const { faker } = require('@faker-js/faker');
const UserService = require("./user.service");

describe("UserController", function() {
    describe("validateUser", function() {
      let req;
      let res;
      let userService;
      beforeEach(() => {
        req = { params: { id: faker.random.uuid() } };
        res = { json: function() {} };
        const userRepo = sinon.spy();
        userService = new UserService(userRepo);
      });
      it("should validate a user", async function() {
        const stubValue = {
          id: req.params.id,
          name: faker.name.findName(),
          email: faker.internet.email(),
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        };
        const mock = sinon.mock(res);
        mock
          .expects("json")
          .once()
          .withExactArgs({ data: stubValue });
        const stub = sinon.stub(userService, "getUser").returns(stubValue);
        userController = new UserController(userService);
        const user = await userController.getUser(req, res);
        expect(stub.calledOnce).to.be.true;
        mock.verify();
      });
    });
  });