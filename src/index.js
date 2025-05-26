#! /usr/bin/env node
const {program, chalk, conf} = require('./resolveDependencies.js');
const {launchCfProblem} = require('./commandactions/launchCfProblem.js')
const {showConfig} = require('./commandactions/showConfig.js');
const {showLastProblemTags} = require('./commandactions/showLastProblemTags.js');
const {setConfig} = require('./commandactions/setConfig.js');
const {safeFunction} = require("./utils");

program
	.command('launch')
	.description('Launch Codeforces problem')
	.option('-r, --rating <ratings...>', 'The rating range to filter the problem from\n' +
			'this argument will override the ratings set in config')
	.action(safeFunction(launchCfProblem));

program
	.command('show-config')
	.description('List the currently configured ratings')
	.action(safeFunction(showConfig));

program
	.command('set-config <fromRating> <toRating>')
	.description('Set the ratings to filter the problem from')
	.action(safeFunction(setConfig));

program
	.command('last-problem-tags')
	.description('Show the tags for last problem launched')
	.action(safeFunction(showLastProblemTags));

program.parse();

