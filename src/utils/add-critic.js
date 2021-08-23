const reduceProperties = require("../utils/reduce-properties");

const configuration = {
  preferred_name: ["critic", "preferred_name"],
  surname: ["critic", "surname"],
  organization_name: ["critic", "organization_name"],
};
const addCritic = reduceProperties("review_id", configuration);

module.exports = addCritic;
