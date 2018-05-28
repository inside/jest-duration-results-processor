// 10 seconds default duration threshold
const threshold = process.env.JEST_RESULTS_DURATION_THRESHOLD || 10000

const testResultsProcessor = testResults => {
  let results = []

  for (const testResult of testResults.testResults) {
    const { testFilePath, perfStats: { start, end } } = testResult
    const testDuration = end - start

    if (testDuration > threshold) {
      results = [...results, { testFilePath, testDuration }]
    }
  }
  if (results.length) {
    console.log(`Test files that lasted for more than ${threshold} ms:`)

    for (const { testFilePath, testDuration } of results) {
      console.log('%s %s', testFilePath, testDuration)
    }
  }

  return testResults
}

module.exports = testResultsProcessor
