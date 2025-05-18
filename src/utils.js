const {conf, chalk} = require('./resolveDependencies.js');

function validateRatings(fromRating, toRating) {
    if (fromRating > toRating) {
        throw new Error('From Rating cannot be greater than To Rating');
    }
}

function getRatingsFromConfig() {
    const fromRating = conf.get('fromRating');
    const toRating = conf.get('toRating');
    if (!fromRating || !toRating) {
        throw new Error('No ratings configured');
    }
    return {fromRating, toRating};
}

function safeFunction(fn) {
    return async function (...params) {
        try {
            await fn(...params);
        } catch (e) {
            console.error(chalk.red(e.message))
        }
    }
}
module.exports = {validateRatings, getRatingsFromConfig, safeFunction};