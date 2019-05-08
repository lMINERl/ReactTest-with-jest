import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';
import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('just a fake test', () => {
  test('fake test', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    // snapshot 
    const component = renderer.create(<div>memory component</div>);
    expect(component).toMatchSnapshot();
  });
});

describe('app component', () => {

  it('doesnt have sections', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<section />)).toEqual(false);

    // updating test cases when requirement changes and output changes
    expect(wrapper.contains(<section />)).toMatchSnapshot(`app has section`);
    // serializer
    expect(wrapper.contains(<section />)).toMatchSnapshot(
      false
    );

    // snapshot to dom
    expect(wrapper).toMatchSnapshot();
  });

  it('does have logo', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('.App-logo'));
  });

  it('does show logo', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('img').prop('src') !== null).toBeTruthy();
  })
});


// describe('App Component', () => {
//   it('shows an img', () => {
//     expect(false).toBeFalsy();
//     const app = shallow(App);

//     expect(app.find('img').prop('src')).toEqual(require('../assets/logo.svg'));
//   });
// });