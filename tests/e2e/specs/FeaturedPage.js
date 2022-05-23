describe("FeaturedPage", () => {
  it("Visits and renders 2 Featured Films", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("h1", "Featured Films");
    cy.get(".featured-container")
      .find(".card-container")
      .should("have.length", 2);
  });
});
