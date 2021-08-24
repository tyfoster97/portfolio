import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import NavButtons from "./NavButtons"

const buttons = [
  'About',
  'LinkedIn',
  'GitHub',
  'Projects'
]

describe('<NavButtons />', () => {
  it('should render', () => {
    const { getByText } = render(<NavButtons />)
    for (const button of buttons) {
      expect(getByText(button)).toBeInTheDocument()
    }
  })
})