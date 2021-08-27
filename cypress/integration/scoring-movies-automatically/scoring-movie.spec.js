context("Scoring the movie", () => {
  before("setting", () => {
    console.log(`url: ${Cypress.env("url")}`);
  });
  it("main", () => {
    cy.visit(`https://www.xxxx.com/title/${Cypress.env("const")}/reference`)
      .get(`input#checkbox-${Cypress.env("const")}`)
      .click({ force: true })
      .get(`a[data-value="${Cypress.env("rating")}"]`)
      .click({ force: true })
      .wait(1000)
      .get(
        "#main > section > div > div > ul:nth-child(10) > li > div > div.ipl-rating-interactive > label > div.ipl-rating-star.ipl-rating-interactive__star > span.ipl-rating-star__rating"
      )
      .should("have.text", Cypress.env("rating"));
  });
});
