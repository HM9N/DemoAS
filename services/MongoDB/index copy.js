"use strict";

const { concat } = require("rxjs");
const mongoDB = require("./MongoDB").singleton();

module.exports = {
  /**
   * start workflow
   * @returns {Observable}
   */
  start$: mongoDB.start$(),
  /**
   * Stop workflow
   * @returns {Observable}
   */
  stop$: mongoDB.stop$(),
  /**
   * @returns {mongoDB}
   */
  mongoDB,
};
