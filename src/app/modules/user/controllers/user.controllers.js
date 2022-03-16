const { HTTP } = require("../../_constants/http");
const { RESPONSE } = require("../../_constants/response");
const createError = require("../../_helpers/createError");
const { createResponse } = require("../../_helpers/createResponse");

class UserController {
    constructor(userService) {
      this.userService = userService;
    }
    async referUser(req, res, next) {
        try {
            const { error, message, data } = await UserService.registerUser(
              
            );
            if (error) {
              return next(
                createError(HTTP.OK, [
                  {
                    status: RESPONSE.ERROR,
                    message,
                    statusCode:
                      data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
                    data,
                    code: HTTP.BAD_REQUEST,
                  },
                ])
              );
            }
            return createResponse(message, data)(res, HTTP.CREATED);
          } catch (err) {
            console.error(err);
        
            return next(createError.InternalServerError(err));
          }
   
    }
  
  }
  module.exports = UserController;