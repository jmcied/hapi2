import { Place } from "./place.js";

export const placeMongoStore = {
  async getAllPlaces() {
    const places = await Place.find().populate("donor").populate("county").lean();
    return places;
  },

  async getPlacesByCounty(id) {
    const places = await Place.find({ county: id });
    return places;
  },

  async donate(title, difficulty, donor, county, lat, lng) {
    const newPlace = new Place({
      title,
      difficulty,
      donor: donor._id,
      county: county._id,
      lat,
      lng,
    });
    await newPlace.save();
    return newPlace;
  },

  async deleteAll() {
    await Place.deleteMany({});
  },

  async updatePlace(updatedPlace) {
    const place = await Place.findOne({ _id: updatedPlace._id });
    place.title = updatedPlace.title;
    place.img = updatedPlace.img;
    await place.save();
  },
};
