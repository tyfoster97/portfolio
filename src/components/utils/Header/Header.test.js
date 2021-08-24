import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Header from "./Header"

const title = 'Ty Foster'


describe('<Header />', () => {
  it('should render', () => {
    const { getByText } = render(<Header />)
    expect(getByText(title)).toBeInTheDocument()
  })
})