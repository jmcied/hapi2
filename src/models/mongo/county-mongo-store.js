import { County } from "./county.js";

export const countyMongoStore = {
  async getAllCountys() {
    const countys = await County.find().lean();
    return countys;
  },

  async findById(id) {
    const county = await County.findOne({ _id: id }).lean();
    return county;
  },

  async findByName(lastName, firstName) {
    const county = await County.findOne({
      lastName,
      firstName,
    });
    return county;
  },
};
