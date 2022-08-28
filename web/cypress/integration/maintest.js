describe("Main Integration Test", () => {
  it("Checks if there is a title", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("title");
  });
});
