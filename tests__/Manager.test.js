const Manager = require("../lib/Manager.js");

describe("managerClass", () => {
  describe("method-test", () => {
    // Positive test
    it("getOfficeNumber() should return the office number of the manager", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";
      const officeNumber = 143;

      // Act
      const obj = new Manager(name, id, email, officeNumber);

      // Assert
      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    });

    it("getRole() should return the role of the Manager", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";
      const officeNumber = 143;

      // Act
      const obj = new Manager(name, id, email, officeNumber);

      // Assert
      expect(obj.getRole()).toEqual("Manager");
    });
  });
});
