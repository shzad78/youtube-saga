import React from 'react';
import Search from '../../../src/js/components/Search';

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


describe('Testing Search Component',()=>{
  const getVideos = jest.fn();
  const wrapper = shallow(<Search getVideos={getVideos} />);
  
  it('renders the Search Component', ()=>{  
    expect(wrapper).toMatchSnapshot();
  });
  
  it('it runs the getVideos function with correct args', ()=>{
    wrapper.find('input').simulate('change', {target:{value:'java'}})
    expect(getVideos.mock.calls[0]).toEqual(['java']);
  });

});

