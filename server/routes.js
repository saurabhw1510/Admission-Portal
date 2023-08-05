import {
  CreateUserHandler,
  GetAllUsersHandler,
  GetUserHandler,
  SignupHandler,
} from "./handlers/userHandler.js";

const routes = (app) => {
  app.post("/create-user", CreateUserHandler);
  app.get("/user/:email", GetUserHandler);
  app.get("/users", GetAllUsersHandler);
  app.post("/signup", SignupHandler);
};

export default routes;
