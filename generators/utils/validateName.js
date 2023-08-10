/*
 * Copyright © 2023 Dell Inc. or its subsidiaries. All Rights Reserved.
 */

function isNameValid(name) {
  return name.indexOf("-") > -1;
}

module.exports = isNameValid;
