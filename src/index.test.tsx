import React from 'react'
import Wrapper from '.'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({
  adapter: new Adapter()
})
const text = `Horologium (Latin hōrologium, from Greek ὡρολόγιον, lit. 'an instrument
for telling the hour') is a constellation of six stars faintly visible in
the southern celestial hemisphere. It was first described by the French
astronomer Nicolas-Louis de Lacaille in 1756 and visualized by him as a
clock with a pendulum and a second hand. In 1922 the constellation was
redefined by the International Astronomical Union (IAU) as a region of the
celestial sphere containing Lacaille's stars, and has since been an IAU
designated constellation. Horologium's associated region is wholly visible
to observers south of 23°N. The constellation's brightest star—and the
only one brighter than an apparent magnitude of 4—is Alpha Horologii (at
3.85), an ageing orange giant star that has swollen to around 11 times the
diameter of the Sun. The long-period variable-brightness star, R Horologii
(4.7 to 14.3), has one of the largest variations in brightness among all
stars in the night sky visible to the unaided eye. Four star systems in
the constellation are known to have exoplanets; one—Gliese 1061—contains
an exoplanet in its habitable zone.`

const keywords = [
  { word: 'Greek', title: 'Ancient Greek' },
  'star',
  'constellation',
  'Sun',
  { word: 'celestial', title: 'Astronomical object' },
  'astronomer',
  'clock',
  'exoplanet',
  'pendulum',
  { word: 'IAU', title: 'IAU designated constellations' }
]

const textLength = text.split(' ').length

const wrapper = mount(<Wrapper keyword={keywords}>{text}</Wrapper>)

describe('Wrapper Component', () => {
  it('Creates basic snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Checks the state after initial render', () => {
    const instance = wrapper.instance() as Wrapper
    expect(instance.state.str.length).toEqual(textLength)
  })

  it('Checks for internal methods', () => {
    const instance = wrapper.instance() as Wrapper
    const returnValue = instance.checkKeywordExist('constellation')
    expect(returnValue).toEqual({ title: 'constellation' })
    const returnValue2 = instance.checkKeywordExist('moon')
    expect(returnValue2).toEqual({})
    instance.setState({ str: [] })
    instance.addAnchors(text)
    expect(instance.state.str.length).toEqual(textLength)
  })
})
