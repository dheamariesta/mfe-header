/*
 * Copyright © 2023 Dell Inc. or its subsidiaries. All Rights Reserved.
 */

const path = require("path");
const { execSync } = require("child_process");
const componentGenerator = require("./component/index.js");
const reducerGen = require("./reducer/index.js");

module.exports = (plop) => {
  plop.setGenerator("Component", componentGenerator);
  plop.setGenerator("Reducer", reducerGen);
  plop.setActionType("prettify", (answers, config) => {
    console.log("Running Prettify....");
    const folderPath = `${path.join(
      config.path,
      plop.getHelper("lowerCase")(answers.name)
    )}`;
    try {
      execSync(`npm run generator:prettify -- "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw err;
    }
  });
};
