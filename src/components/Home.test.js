import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

const title = 'Ty Foster'


describe('<Home />', () => {
  it('should render', () => {
    const { getByText } = render(<Home />)
    expect(getByText(title)).toBeInTheDocument()
  })
})