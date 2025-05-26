const {chalk, open, conf} = require('../resolveDependencies.js');
const {getRatingsFromConfig, validateRatings} = require("../utils");

function getRatings(ratings) {
    if(ratings) {
        if(ratings.length === 2) {
            const fromRating = ratings[0];
            const toRating = ratings[1];

            if(isNaN(fromRating) || isNaN(toRating)) {
                throw new Error("Invalid ratings provided");
            }
            console.log(chalk.green('Reading ratings from command line'));
            return {fromRating, toRating};
        } else {
            throw new Error("Invalid number of ratings provided");
        }
    } else {
        console.log(chalk.green('Reading ratings from config'));
        return getRatingsFromConfig()
    }
}

async function fetchProblems(fromRating, toRating) {
    console.log(chalk.green('Fetching problems in range: ') + chalk.blue(`${fromRating} - ${toRating}`));

    const response = await fetch(`https://codeforces.com/api/problemset.problems`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch problems, response status: " + response.status);
    } else {
        console.log(chalk.green('Problems fetched successfully'));
        return data.result.problems;
    }
}

function getRandomProblem(problems) {
    //throw exception if problems is empty otherwise return random problem
    if (problems.length === 0) {
        throw new Error("No problems found in the given range");
    }
    const randomIndex = Math.floor(Math.random() * problems.length);
    return problems[randomIndex];
}

function launchProblem(problem) {
    const url = `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`;
    console.log(chalk.green('Launching problem: ') + chalk.blue(problem.name));
    console.log(chalk.green('URL: ') + chalk.blue(url));
    conf.set('last-problem', problem);
    // Open the URL in the default browser
    open(url);
}

async function launchCfProblem({rating}) {
    // Check if the user has provided ratings and there are two ratings
    const {fromRating, toRating} = getRatings(rating);

    validateRatings(fromRating, toRating)

    const problems = await fetchProblems(fromRating, toRating);

    //filter the problems using points key based on the rating range
    const filteredProblems = problems.filter(problem => {
        const rating = problem.rating;
        return rating >= fromRating && rating <= toRating;
    });

    const problem = getRandomProblem(filteredProblems);

    launchProblem(problem);
}

module.exports = {launchCfProblem};
