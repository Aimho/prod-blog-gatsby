/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('ts-node').register();
const { createPages } = require('./src/lib/createPages');
exports.createPages = createPages;
