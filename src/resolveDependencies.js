const {default: Conf} = require('conf');
const {default: chalk} = require('chalk');
const {default: open} = require('open');
const {program} = require('commander');

const conf = new Conf({projectName: 'cp-breakfast'});

module.exports = {conf, chalk, open, program};