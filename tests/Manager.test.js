const Manager = require("../Lib/Manager");

describe("Manager", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name, office number", () => {
      //assign
      const obj = new Manager("Becky", 2319, "becky92@aol.com", 3);
      //act
      //assert

      expect(obj.name).toEqual("Becky");
      expect(obj.email).toEqual("becky92@aol.com");
      expect(obj.id).toEqual(2319);
      expect(obj.officeNumber).toEqual(3);
    });
  });
});
