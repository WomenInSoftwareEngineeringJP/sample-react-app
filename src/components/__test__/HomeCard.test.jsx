/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomeCard from '../HomeCard'

describe('HomeCard', () => {
  it('Clicks the button and adds 1', async () => {
    render(<HomeCard />)

    // Click button
    fireEvent.click(screen.getByText('count is 0'))

    // Wait for page to update with query text
    const found = await screen.findByText('count is 1')
    expect(found).toBeTruthy()
  })
})
