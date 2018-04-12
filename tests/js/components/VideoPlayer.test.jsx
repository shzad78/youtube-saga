import React from 'react';
import { VideoPlayer } from '../../../src/js/components/VideoPlayer';

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


describe('Testing VideoPlayer Component',()=>{
  
  it('renders the VideoPlayer Component', ()=>{ 
    let video = {
      id: {
        videoId: 1234
      },
      snippet: {
        title: 'some title',
        description: 'some description'
      }
    }
    let wrapper = shallow(<VideoPlayer selectedVideo={video} />); 
    expect(wrapper).toMatchSnapshot();
  });
  
  it('it renders given an empty video object', ()=>{
    let video = {};
    let wrapper = shallow(<VideoPlayer selectedVideo={video} />); 
    expect(wrapper).toMatchSnapshot();
  });

});


