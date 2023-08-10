/*
 * Copyright © 2023 Dell Inc. or its subsidiaries. All Rights Reserved.
 */

const customElements = require("../../custom-elements.json");

function componentExists(comp) {
  const isExists = customElements.modules.find((ele) => {
    const found = ele.declarations.find((item) => item.tagName === comp);
    return Boolean(found);
  });
  return isExists;
}

module.exports = componentExists;
