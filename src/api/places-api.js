import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const placesApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const places = db.placeStore.getAllPlaces();
      return places;
    },
  },
  findByCounty: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const places = await db.placeStore.getPlacesByCounty(request.params.id);
      return places;
    },
  },

  makePlace: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const county = await db.countyStore.findById(request.params.id);
      if (!county) {
        return Boom.notFound("No County with this id");
      }
      const place = await db.placeStore.donate(
        request.payload.title,
        request.payload.method,
        request.auth.credentials,
        county,
        request.payload.lat,
        request.payload.lng,
    );
    return place;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.placeStore.deleteAll();
      return { success: true };
    },
  },
};
