import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import SiteAccordion from "./Accordion"

describe('<SiteAccordion />', () => {
  it('should render', () => {
    const { getByText } = render(<SiteAccordion summary='summary' details='details'/>)
    expect(getByText('summary')).toBeInTheDocument()
    expect(getByText('details')).toBeInTheDocument()
  })
})