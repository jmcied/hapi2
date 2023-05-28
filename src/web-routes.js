import { accountsController } from "./controllers/accounts-controller.js";
import { placesController } from "./controllers/places-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/addPlace", config: placesController.index },
  { method: "POST", path: "/addPlace", config: placesController.addPlace },
  { method: "POST", path: "/addPlace/{id}/uploadimage", config: placesController.uploadImage },
  { method: "GET", path: "/report", config: placesController.report },
  

  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },
];
