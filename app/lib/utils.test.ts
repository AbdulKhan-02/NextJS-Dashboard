import { expect, test } from 'vitest'
import { formatCurrency } from './utils'

test('format currecny', () => {
  let result = formatCurrency(100);
  expect(result).toBe("$1.00");
})