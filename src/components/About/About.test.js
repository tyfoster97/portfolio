import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import About from "./About"

describe('<About />', () => {
  it('should render', () => {
    const { getByText } = render(<About />)
    expect(getByText(/Coffee Enthusiast/i)).toBeInTheDocument()
    expect(getByText(/Avid Gamer/i)).toBeInTheDocument()
    expect(getByText(/Social Media Influencer/i)).toBeInTheDocument()
    expect(getByText(/2.5 Lingual/i)).toBeInTheDocument()
    expect(getByText(/Programming Languages/i)).toBeInTheDocument()
    expect(getByText(/Software Frameworks/i)).toBeInTheDocument()
    expect(getByText('Software')).toBeInTheDocument()
    expect(getByText(/Professional Skills/i)).toBeInTheDocument()
  })
})