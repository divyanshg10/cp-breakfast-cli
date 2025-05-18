const {chalk, conf} = require("../resolveDependencies");
const {validateRatings} = require("../utils");

function setConfig(fromRating, toRating) {
    //validate if fromRating and toRating are numbers
    if (isNaN(fromRating) || isNaN(toRating)) {
        throw new Error('Invalid rating range');
    }
    validateRatings(fromRating, toRating);
    //set the ratings in config
    //use chalk to render the output
    console.log(
        chalk.green('Setting ratings to: ') +
        chalk.blue(`${fromRating} - ${toRating}`)
    );
    conf.set('fromRating', fromRating);
    conf.set('toRating', toRating);
}

module.exports = {setConfig};