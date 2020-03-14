import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '/../client/src/App.jsx'


Enzyme.configure({ adapter: new Adapter() })

describe('MyComponent', () => {
  it('should show text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div');
    expect(text.text()).toBe('hello there')
  })
}