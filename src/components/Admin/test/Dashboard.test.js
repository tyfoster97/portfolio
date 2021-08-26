import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from '../Dashboard'

describe('<AdminDashboard />', () => {
  it('should render', () => {
    const { getByText } = render(<Dashboard />)
    expect(getByText('Admin Dashboard')).toBeInTheDocument()
  })
})