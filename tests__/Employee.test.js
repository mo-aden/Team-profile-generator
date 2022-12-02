const Employee = require("../lib/Employee.js");

describe("employeeClass", () => {
  describe("method-test", () => {
    // Positive test
    it("getName() should return name of the employee", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";

      // Act
      const obj = new Employee(name, id, email);

      // Assert
      expect(obj.getName()).toEqual(name);
    });

    it("getId() should return the ID of the employee", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";

      // Act
      const obj = new Employee(name, id, email);

      // Assert
      expect(obj.getId()).toEqual(id);
    });
    it("getEmail() should return email of the employee", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";

      // Act
      const obj = new Employee(name, id, email);

      // Assert

      expect(obj.getEmail()).toEqual(email);
    });
    it("getRole() should return the role of the employee", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";

      // Act
      const obj = new Employee(name, id, email);

      // Assert
      expect(obj.getRole()).toEqual("Employee");
    });
  });
});
