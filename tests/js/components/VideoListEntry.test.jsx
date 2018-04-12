import React from 'react';
import VideoListEntry from '../../../src/js/components/VideoListEntry';

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


describe('Testing VideoListEntry Component',()=>{
  const handleSelectedVideo = jest.fn();
  const video = {
    snippet: {
      title: 'some title',
      description: 'some description',
      thumbnails: {
        default: {
          url: 'someurl'
        }
      }
    }
  }

  const wrapper = shallow(
    <VideoListEntry 
      handleSelectedVideo={handleSelectedVideo} 
      video={video}
    />
  );

  it('renders the VideoListEntry Component', ()=>{  
    expect(wrapper).toMatchSnapshot();
  });
  
  it('runs handleSelectedVideo function with video arg when clicked', ()=>{
    wrapper.find('.media-heading').simulate('click')
    expect(handleSelectedVideo.mock.calls[0]).toEqual([video]);
  });

});

