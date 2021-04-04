describe("Smoke Test", () => {
  it("Visits the Next.js Application", () => {
    cy.visit("http://localhost:3000")

    cy.findByText("Welcome to Next.js")
  })
})
