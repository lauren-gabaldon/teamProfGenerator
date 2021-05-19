const Intern = require("../Lib/Intern");

describe("Intern", () => {
  describe("initialization", () => {
    it("should create an object with an id, email, name, school", () => {
      //assign
      const obj = new Intern("Becky", 2319, "becky92@aol.com", "DU");
      //act
      //assert

      expect(obj.name).toEqual("Becky");
      expect(obj.email).toEqual("becky92@aol.com");
      expect(obj.id).toEqual(2319);
      expect(obj.school).toEqual("DU");
    });
  });
});
