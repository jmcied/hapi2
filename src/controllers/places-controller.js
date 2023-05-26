import { db } from "../models/db.js";

export const placesController = {
  index: {
    handler: async function (request, h) {
      const countys = await db.countyStore.getAllCountys();
      return h.view("Donate", { title: "Make a Place", countys: countys });
    },
  },
  report: {
    handler: async function (request, h) {
      const places = await db.placestore.getAllPlaces();
      return h.view("Report", {
        title: "Places to Date",
        places: places,
      });
    },
  },
  donate: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawCounty = request.payload.county.split(",");
        const county = await db.countyStore.findByName(rawCounty[0], rawCounty[1]);
        await db.placestore.donate(request.payload.amount, request.payload.method, loggedInUser._id, county._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
