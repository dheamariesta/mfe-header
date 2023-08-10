/*
 * Copyright © 2023 Dell Inc. or its subsidiaries. All Rights Reserved.
 */

const fs = require("fs");
const path = require("path");

function fileExists(comp) {
  const isExists = fs.existsSync(path.join(process.env.INIT_CWD, comp));
  return isExists;
}

module.exports = fileExists;
