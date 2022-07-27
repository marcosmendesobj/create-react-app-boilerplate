import { screen } from '@testing-library/react'
import { renderAll } from 'utils/tests/renderAll'

import Users from '.'

describe('<Users />', () => {
  it('should render the heading', () => {
    renderAll(<Users />)

    expect(screen.getByText(/lista de usuarios/i)).toBeInTheDocument()
  })
})
