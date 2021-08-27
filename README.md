# scoring-movies-automatically

When I migrated my account on IMOb, I tried to use Cypress for automatic scoring because the service can export the csv of ratings but does not support importing. But, this project is still incomplete due to lack of my understanding around asynchronous execution. The spec files are working, so if you fix `main.js`, it should work.

## Installation

```
npm install
```

## Setup

- Fill values in `cypress.env.json`

  `csvpath` is full path of the csv file you export.

```
{
    "email": "",
    "password": "",
    "csvpath": ""
}
```

- Replace the string `XXXX` with the correct service name in spec files (`scoring-movie.spec.js` and `sign-in.spec.js`).

```
cy.visit(`https://www.xxxx.com/title/${Cypress.env("const")}/reference`)
```

```
.contains("span", "Sign in with XXXX")
```

## Running

```
cd [this repository's root]

node cypress/integration/scoring-movies-automatically/main.js
```

## Further information

- [Cypress documentaiton](https://docs.cypress.io/guides/guides/command-line)
