describe("SearchPage", () => {
  it("Visits and renders 5 Films searched by user", () => {
    cy.visit("http://localhost:8080/");
    cy.get(".nav-input").type("Dark");
    cy.get("button").click();
    cy.contains("h1", "Your Top 5 Films");
    cy.get(".search-container")
      .find(".card-container")
      .should("have.length", 5);
  });
});
