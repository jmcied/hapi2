import { assert } from "chai";
import { placeService } from "./place-service.js";
import { maggie, testCountys, testPlaces } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("Place API tests", () => {
  setup(async () => {
    await placeService.createUser(maggie);
    await placeService.authenticate(maggie);
    await placeService.deleteAllUsers();
    await placeService.createUser(maggie);
    await placeService.authenticate(maggie);
  });
  teardown(async () => {
    await placeService.deleteAllUsers();
  });

  test("create a place", async () => {
    const returnedCounty = await placeService.createCounty(testCountys[0]);
    await placeService.makePlace(returnedCounty._id, testPlaces[0]);
    const returnedPlaces = await placeService.getPlaces(returnedCounty._id);
    assert.equal(returnedPlaces.length, 1);
    assertSubset(returnedPlaces[0], testPlaces[0]);
  });
});
