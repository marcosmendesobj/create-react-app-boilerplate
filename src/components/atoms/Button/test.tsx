import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button title="Something" />)

    expect(
      screen.getByRole('button', { name: /something/i })
    ).toBeInTheDocument()
  })
})
