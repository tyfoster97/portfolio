import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Projects from './Projects'

describe('<Projects />', () => {
  it('should render', () => {
    const { getByText } = render(<Projects />)
    expect(getByText('Portfolio site')).toBeInTheDocument()
    expect(getByText('Messenger clone')).toBeInTheDocument()
    expect(getByText('Employee Evaluation Survey')).toBeInTheDocument()
    expect(getByText('Embedded C IoT Device')).toBeInTheDocument()
    expect(getByText('Discord Server Admin Chat Bot')).toBeInTheDocument()
  })
})