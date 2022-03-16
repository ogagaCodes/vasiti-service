const { HTTP } = require("../../_constants/http");
const { RESPONSE } = require("../../_constants/response");
const createError = require("../../_helpers/createError");
const { createResponse } = require("../../_helpers/createResponse");

class AuthController {
    constructor(userService) {
      this.userService = userService;
    }
    async register(req, res, next) {
        try {
            const { error, message, data } = await this.userService.createUser(
              req.body
            );
            if (error) {
              return next(
                createError(HTTP.BAD_REQUEST, [
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
    async login(req, res, next) {
        try {
            const { error, message, data } = await this.uservice.loginUser(
              req.body
            );
            if (error) {
              return next(
                createError(HTTP.UNAUTHORIZED, [
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

    // async validateToken(req, res, next) {
    //     try {
    //         const { error, message, data } = tis.authService.validateToken(
    //           req.body
    //         );
    //         if (error) {
    //           return next(
    //             createError(HTTP.OK, [
    //               {
    //                 status: RESPONSE.ERROR,
    //                 message,
    //                 statusCode:
    //                   data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
    //                 data,
    //                 code: HTTP.BAD_REQUEST,
    //               },
    //             ])
    //           );
    //         }
    //         return createResponse(message, data)(res, HTTP.CREATED);
    //       } catch (err) {
    //         console.error(err);
        
    //         return next(createError.InternalServerError(err));
    //       }
   
    // }
  }
  module.exports = AuthController;