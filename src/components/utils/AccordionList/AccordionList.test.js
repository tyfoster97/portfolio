import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import AccordionList from "./AccordionList"

const items = {
  name: 'Custom Items',
  items: [
    {
      name: 'List A',
      items: [
        'left',
        'right',
        'middle',
      ]
    },
    {
      name: 'List B',
      items: [
        'up',
        'down',
        'level',
      ]
    }
  ]
}

describe('<AccordionList />', () => {
  it('should render', () => {
    const { getByText } = render(<AccordionList />)
    expect(getByText('List')).toBeInTheDocument()
    expect(getByText('item')).toBeInTheDocument()
    expect(getByText('details')).toBeInTheDocument()
  })

  it('should render custom data', () => {
    const { getByText } = render(<AccordionList items={items} />)
    expect(getByText('Custom Items')).toBeInTheDocument()
    expect(getByText('level')).toBeInTheDocument()
    expect(getByText('middle')).toBeInTheDocument()
  })
})