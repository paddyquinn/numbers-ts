import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'
import { Positive, PositiveInt } from 'io-ts-numbers'

import { PositiveIntArbitrary } from '../../src/PositiveInt'

testProp(
  'should yield positive integers',
  [PositiveIntArbitrary],
  (t, num) => {
    t.true(Positive.is(num))
    t.true(Int.is(num))
    t.true(PositiveInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
