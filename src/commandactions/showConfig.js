const {chalk} = require("../resolveDependencies");
const {getRatingsFromConfig} = require("../utils");

function showConfig() {
    const {fromRating, toRating} = getRatingsFromConfig();
    console.log(chalk.green('From rating: ') + chalk.blue(fromRating));
    console.log(chalk.green('To rating: ') + chalk.blue(toRating));
}

module.exports = {showConfig};