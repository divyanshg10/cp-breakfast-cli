const {chalk, conf} = require('../resolveDependencies')

function showLastProblemTags() {
    const lastProblem = conf.get('last-problem');
    if (lastProblem) {
        console.log(chalk.blue(lastProblem.tags));
    } else {
        console.log(chalk.red('No last problem found.'));
    }
}

module.exports = {showLastProblemTags};