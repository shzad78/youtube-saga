import React from 'react';
import { Nav } from '../../../src/js/components/Nav';

//import renderer from 'react-test-renderer';
// Above package is provided by Jest (replacing react-test-utils)

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


describe('Testing Nav Component',()=>{
  const getVideos = jest.fn();
  const wrapper = shallow(<Nav getVideos={getVideos} />);
  
  it('renders the Nav Component', ()=>{  
    expect(wrapper).toMatchSnapshot();
  });
  
  it('it passes on the getVideos function', ()=>{
    expect(getVideos.mock.calls.length).toBe(0);
  });

});

