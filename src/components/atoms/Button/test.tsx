import { screen } from '@testing-library/react'
import { renderAll } from 'utils/tests/renderAll'

import Button from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    renderAll(<Button title="Something" />)

    expect(
      screen.getByRole('button', { name: /something/i })
    ).toBeInTheDocument()
  })
})
