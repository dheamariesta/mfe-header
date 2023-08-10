/*
 * Copyright © 2023 Dell Inc. or its subsidiaries. All Rights Reserved.
 */

/**
 * Reducer Generator
 */

const path = require("path");
const fileExists = require("../utils/fileExists");

module.exports = {
  description: "Add a reducerSlice, reduxSaga and reducerService",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Form",
      validate: (value) => {
        if (/.+/.test(value)) {
          return fileExists(value)
            ? "A reducer with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "saga",
      message: "Do you want to add saga and service file?",
      default: true,
    },
  ],
  actions: (data) => {
    const currentPath = path.join(__dirname, "../../src/redux");
    // generate reducer slice
    const actions = [
      {
        type: "add",
        path: `${currentPath}/{{camelCase name}}/{{camelCase name}}Slice.ts`,
        templateFile: "./reducer/slice.hbs",
        abortOnFail: true,
      },
    ];

    // generate saga file
    if (data.saga) {
      actions.push({
        type: "add",
        path: `${currentPath}/{{camelCase name}}/{{camelCase name}}Saga.ts`,
        templateFile: "./reducer/saga.hbs",
        abortOnFail: true,
      });

      // generate service file
      actions.push({
        type: "add",
        path: `${currentPath}/{{camelCase name}}/{{camelCase name}}Service.ts`,
        templateFile: "./reducer/service.hbs",
        abortOnFail: true,
      });
    }

    // prettify the generated templates
    actions.push({
      type: "prettify",
      path: currentPath,
    });

    return actions;
  },
};
