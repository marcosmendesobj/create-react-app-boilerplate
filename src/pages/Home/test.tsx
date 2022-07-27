import { screen } from '@testing-library/react'
import { renderAll } from 'utils/tests/renderAll'

import Home from '.'

describe('<Home />', () => {
  it('should render correctly', () => {
    renderAll(<Home />)

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
