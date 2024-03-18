import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'


vi.mock('next/font/google', () => ({
    Inter: () => ({
      style: {
        fontFamily: 'mocked',
      },
    }),
    Lusitana: () => ({
      style: {
        fontFamily: 'mocked',
      },
    }),
  }))
test('Page', () => {
  render(<Page params={{id: ""}} />)
  expect(screen.getByRole('heading', { level: 1, name: 'Invoices Page' })).toBeDefined()
})