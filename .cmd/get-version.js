// NOTE: This script should only be used by the GitHub publish action.

const pkg = require('../package.json');

/**
 * Gets a new package version by appending '-<commit-sha>' to the semantic versioning part.
 *
 * @param length - Commit SHA length
 */
function getVersion(length) {
  console.log(pkg.version + '-' + process.env.GITHUB_SHA.substring(0, length));
}

getVersion(7);
