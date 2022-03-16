const chai = require("chai");
const sinon = require("sinon");
const UserRepository = require("./");
const expect = chai.expect;
const { faker } = require('@faker-js/faker');
const UserService = require("./user.service");
describe("UserService", function() {
  describe("register", function() {
    it("it should register a new user", async function() {
      const stubValue = {
        id: faker.random.uuid(),
        user_name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      };
      const userRepo = new UserRepository();
      const stub = sinon.stub(userRepo, "create").returns(stubValue);
      const userService = new UserService(userRepo);
      const user = await userService.create(stubValue.name, stubValue.email);
      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.name).to.equal(stubValue.user_name);
      expect(user.email).to.equal(stubValue.email);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
  it("should not register a user with empty body", async function() {
    const req = { body: {} };
    await new UserController().register(req, res);
    expect(status.calledOnce).to.be.true;
    expect(status).to.equal(400);
    expect(json.calledOnce).to.be.true;
  });
  it("should not register a user when username param is not provided", async function() {
    const req = { body: { email: faker.internet.email() } };
    await new UserController().register(req, res);
    expect(status.calledOnce).to.be.true;
    expect(status).to.equal(400);
    expect(json.calledOnce).to.be.true;
  });


});



