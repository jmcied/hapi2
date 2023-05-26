import { userApi } from "./api/users-api.js";
import { placesApi } from "./api/places-api.js";
import { countysApi } from "./api/countys-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/places", config: placesApi.findAll },
  { method: "GET", path: "/api/countys/{id}/places", config: placesApi.findByCounty },
  { method: "POST", path: "/api/countys/{id}/places", config: placesApi.makePlace },
  { method: "DELETE", path: "/api/places", config: placesApi.deleteAll },

  { method: "GET", path: "/api/countys", config: countysApi.find },
  { method: "GET", path: "/api/countys/{id}", config: countysApi.findOne },
  { method: "POST", path: "/api/countys", config: countysApi.create },
  { method: "DELETE", path: "/api/countys/{id}", config: countysApi.deleteOne },
  { method: "DELETE", path: "/api/countys", config: countysApi.deleteAll },
];
