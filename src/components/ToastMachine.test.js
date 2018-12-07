import React from 'react'
import { shallow } from 'enzyme'

import ToastMachine from './ToastMachine'

describe('<ToastMachine>', () => {
  const toastMachine = shallow(<ToastMachine />)

  it('renders properly', () => {
    expect(toastMachine).toMatchSnapshot()
  })
})
