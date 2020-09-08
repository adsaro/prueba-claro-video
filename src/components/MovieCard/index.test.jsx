import React from 'react'
import { render, fireEvent, screen } from 'test-utils'
import MovieCard from './index'

it('Renders the connected app with initialState', () => {
  render(<MovieCard item={{image_small: 'no image', title: 'image alt'}} />)

  expect(screen.getByAltText(/image alt/i)).toBeInTheDocument()
})