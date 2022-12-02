const Engineer = require("../lib/Engineer.js");

describe("engineerClass", () => {
  describe("method-test", () => {
    // Positive test
    it("getGitHub() should return gitHub url of the engineer", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";
      const gitHub = "https://github.com/mo-aden";

      // Act
      const obj = new Engineer(name, id, email, gitHub);

      // Assert
      expect(obj.getGitHub()).toEqual(gitHub);
    });

    it("getRole() should return the role of the engineer", () => {
      // Arrange
      const name = "mo-aden";
      const id = 123;
      const email = "moaden@gmail.com";
      const gitHub = "https://github.com/mo-aden";

      // Act
      const obj = new Engineer(name, id, email, gitHub);

      // Assert
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
});
