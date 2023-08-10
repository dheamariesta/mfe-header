/**
 * Component Generator
 */

const componentExists = require("../utils/componentExists");
const isNameValid = require("../utils/validateName");

module.exports = {
  description: "Add a React component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Form",
      validate: (value) => {
        if (/.+/.test(value)) {
          if (componentExists(value)) {
            return "A component with this name already exists";
          }
          if (!isNameValid(value)) {
            return "React component name should have dash: Eg: (app-button)";
          }
          return true;
        }

        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "scss",
      message: "Do you want to add scss file?",
      default: true,
    },
  ],
  actions: (data) => {
    const currentPath = process.env.INIT_CWD;
    const actions = [];

    actions.push({
      type: "add",
      path: `${currentPath}/{{lowerCase name}}/{{lowerCase name}}-component.tsx`,
      templateFile: "./component/index.ts.hbs",
      abortOnFail: true,
    });

    if (data.scss) {
      actions.push({
        type: "add",
        path: `${currentPath}/{{lowerCase name}}/{{lowerCase name}}-component.scss`,
        templateFile: "./component/scss.hbs",
        abortOnFail: true,
      });
    }
    actions.push({
      type: "prettify",
      path: currentPath,
    });

    return actions;
  },
};
