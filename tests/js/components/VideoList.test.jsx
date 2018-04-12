import React from 'react';
import { VideoList } from '../../../src/js/components/VideoList';

//Below are related to enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


describe('Testing VideoList Component',()=>{
  let videoList = [{id:{videoId:1}}, {id:{videoId:2}}];
  const selectVideo = jest.fn();

  it('renders the VideoList Component', ()=>{ 
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={false}
        error={null}
    />); 
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the Loading message', ()=>{ 
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={true}
        error={null}
    />); 
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the Error message', ()=>{ 
    let wrapper = shallow(
      <VideoList 
        selectVideo={selectVideo}
        videoList={videoList}
        isLoading={false}
        error={ {message: 'Error While loading Videos'} }
    />); 
    expect(wrapper).toMatchSnapshot();
  });

  
  it('it passes on the selectVideo fn', ()=>{  
    expect(selectVideo.mock.calls.length).toBe(0);
  });

});

