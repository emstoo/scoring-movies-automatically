const cypress = require("cypress");
const fs = require("fs");
const parse = require("csv-parse/lib/sync");

const env = JSON.parse(fs.readFileSync("./cypress.env.json"));
const data = fs.readFileSync(env.csvpath);
const items = parse(data, { columns: true });

const signIn = async () => {
  await cypress
    .run({
      browser: "chrome",
      config: { video: false },
      spec: "./cypress/integration/scoring-movies-automatically/sign-in.spec.js",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

const scoringMovie = async (item) => {
  await cypress
    .run({
      browser: "chrome",
      config: { video: false },
      spec: "./cypress/integration/scoring-movies-automatically/scoring-movie.spec.js",
      env: {
        const: item["Const"],
        url: item["URL"],
        rating: item["Your Rating"],
      },
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

// main
signIn();

for (let item of items) {
  scoringMovie(item);
}
