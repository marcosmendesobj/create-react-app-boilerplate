import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home />)

    const logo = screen.getByRole('img', {
      name: /logo/i
    })
    expect(logo).toBeInTheDocument()

    const heading = screen.getByRole('heading', {
      name: /create react app boilerplate/i
    })
    expect(heading).toBeInTheDocument()

    const description = screen.getByText(
      /typescript, react\.js, redux, redux sagas e chakra ui/i
    )
    expect(description).toBeInTheDocument()
  })
})
