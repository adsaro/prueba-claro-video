import React from 'react'
import { render, fireEvent, screen } from 'test-utils'
import MovieContainer from './index'

it('Renders the connected app with initialState', () => {
  render(<MovieContainer />)

  expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument()
})