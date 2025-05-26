# Codeforces Problem Launcher CLI

A command-line tool to launch Codeforces problems filtered by rating range, with easy configuration

## Features

- Launch random Codeforces problems within a specified rating range
- Configure and view your preferred rating range
- Simple configuration management

## Installation

```bash
npm install
```

## Usage

```bash
node src/index.js <command> [options]
```

### Commands

- `launch`  
  Launch a random Codeforces problem.  
  Options:
    - `-r, --rating <ratings...>`: Override the configured rating range

- `show-config`  
  Show the currently configured rating range.

- `set-config <fromRating> <toRating>`  
  Set the rating range for problem selection.

- `last-problem-tags`  
    Show tags of the last launched problem.

## Examples

Set your preferred rating range:
```bash
node src/index.js set-config 1200 1600
```

Show your current configuration:
```bash
node src/index.js show-config
```

Launch a problem (using config):
```bash
node src/index.js launch
```

Launch a problem with a custom rating range:
```bash
node src/index.js launch --rating 1500 1700
```

Show tags of the last launched problem:
```bash
node src/index.js last-problem-tags
```

## Development

- Requires Node.js
- Uses `chalk` for colored output
- Configuration is managed via a local config store

## TODO

- Use user data to show only unsolved problems
- Cache the problem list locally to reduce API calls

## License

MIT