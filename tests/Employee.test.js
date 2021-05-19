const Employee = require("../Lib/Employee");

describe("Employee", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name", () => {
      //assign
      const obj = new Employee("Becky", 2319, "becky92@aol.com");
      //act
      //assert

      expect(obj.name).toEqual("Becky");
      expect(obj.email).toEqual("becky92@aol.com");
      expect(obj.id).toEqual(2319);
    });
  });
});
