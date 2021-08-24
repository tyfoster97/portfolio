import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import ProjectCard from './Project'

describe('<ProjectCard />', () => {
  it('should render with defaults', () => {
    const { getByText } = render(<ProjectCard />)
    expect(getByText(/Project/i)).toBeInTheDocument()
    expect(getByText(/description/i)).toBeInTheDocument()
    expect(getByText(/View Source/i)).toBeInTheDocument()
    expect(getByText(/skills/i)).toBeInTheDocument()
  })
})