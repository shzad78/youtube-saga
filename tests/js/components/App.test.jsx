import React from 'react';
import { App } from '../../../src/js/components/App';

//import renderer from 'react-test-renderer';
// Above package is provided by Jest (replacing react-test-utils)

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe("App Component", ()=>{
  const getVideos = jest.fn();
  const wrapper = shallow(<App getVideos={getVideos}/>);

  it('renders the App Component', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('tests that getVideos runs with correct args', ()=>{
    // expect(getVideos.mock.calls[0][0]).toBe('javascript');
    // expect(getVideos.mock.calls[0][1]).toBe(true);
    expect(getVideos.mock.calls[0]).toEqual(['javascript', true]);
  });

});







