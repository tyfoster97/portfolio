import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Home from "./Home"

const title = 'Ty Foster'
const buttons = [
  'About Me',
  'LinkedIn',
  'GitHub',
  'Projects'
]

describe('<Home />', () => {
  it('should render', () => {
    const { getByText } = render(<Home />)
    expect(getByText(title)).toBeInTheDocument()
    for (const button of buttons) {
      expect(getByText(button)).toBeInTheDocument()
    }
  })
})