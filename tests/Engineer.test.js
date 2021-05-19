const Engineer = require("../Lib/Engineer");

describe("Engineer", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name, office number", () => {
      //assign
      const obj = new Engineer("Becky", 2319, "becky92@aol.com", "gitUsername");
      //act
      //assert

      expect(obj.name).toEqual("Becky");
      expect(obj.email).toEqual("becky92@aol.com");
      expect(obj.id).toEqual(2319);
      expect(obj.gitName).toEqual("gitUsername");
    });
  });
});
