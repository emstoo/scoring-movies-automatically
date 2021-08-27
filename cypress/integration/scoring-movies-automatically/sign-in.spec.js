context("Sign In to XXXX", () => {
  before("setting", () => {});
  it("main", () => {
    cy.visit(
      "https://www.xxxx.com/registration/signin?ref=nv_generic_lgin&u=%2F"
    )
      .contains("span", "Sign in with XXXX")
      .click({ force: true })
      .wait(1000)
      .get("input#ap_email")
      .clear()
      .type(Cypress.env("email"))
      .should("have.value", Cypress.env("email"))
      .get("input#ap_password")
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"))
      .get("input#signInSubmit")
      .click({ force: true })
      .wait(1000);
  });
});
