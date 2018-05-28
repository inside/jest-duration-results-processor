# jest-duration-results-processor

A jest results processor showing test files that exceed a duration threshold

## Installation

```shell
$ npm install jest-duration-results-processor --save-dev
```

## Configuration

By default, the threshold duration is set to 10 seconds. Use an environment
variable to override the default:

```shell
# Set the duration threshold to 1 seconds
$ export JEST_RESULTS_DURATION_THRESHOLD=1000
```

## Usage with the jest command

```shell
# Launch all test suites and report files exceededing a duration of 5 seconds
$ JEST_RESULTS_DURATION_THRESHOLD=5000 \
    jest --testResultsProcessor ./node_modules/jest-duration-results-processor
```

## Usage with the package.json file
```json
{
  "scripts": {
    "test:duration": "JEST_RESULTS_DURATION_THRESHOLD=5000 jest --testResultsProcessor ./node_modules/jest-duration-results-processor"
  },
}
```
