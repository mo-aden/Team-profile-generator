const Intern = require("../lib/Intern.js");

describe("internClass", () => {
  describe("method-test", () => {
    // Positive test
    it("getSchool() should return the school name of the intern", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";
      const school = "University of Denver";

      // Act
      const obj = new Intern(name, id, email, school);

      // Assert
      expect(obj.getSchool()).toEqual(school);
    });

    it("getRole() should return the role of the Intern", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";
      const school = "University of Denver";

      // Act
      const obj = new Intern(name, id, email);

      // Assert
      expect(obj.getRole()).toEqual("Intern");
    });
  });
});
