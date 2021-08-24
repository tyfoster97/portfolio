import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import PageWrapper from "./PageWrapper"

describe('<PageWrapper />', () => {
  it('should render', () => {
    const { getByText } = render(<PageWrapper />)
    expect(getByText('Ty Foster')).toBeInTheDocument()
  })

  it('should render with children', () => {
    const { getByText } = render(<PageWrapper children='test string' />)
    expect(getByText('test string')).toBeInTheDocument()
  })

  it('should render with implicit children', () => {
    const { getByText } = render(<PageWrapper>I am a child</PageWrapper>)
    expect(getByText('I am a child')).toBeInTheDocument()
  })
})