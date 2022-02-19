import Map from './index'
import { render, screen } from '@testing-library/react'
describe('<Map/>', () => {
  it('should render map without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('render with the marker in correct place', () => {
    const places = {
      id: 1,
      name: 'Campinas',
      slug: 'campinas',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[places]} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
  })
})
