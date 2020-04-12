import React from 'react';
import { mount, shallow } from 'enzyme';
import Loading from '../../../components/Loading';

describe('Component - Loading', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Loading icon="Puff" height="100" width="100" />);
    
    expect(component).toMatchSnapshot();
  });

  it('Should return element html correct', () => {
    const wrap = mount(<Loading icon="Puff" height="100" width="100" />);
    const mockLoading = '<div aria-busy="true" class=""><svg width="100" height="100" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#00BFFF" aria-label="audio-loading"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="strokeOpacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="strokeOpacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg></div>';

    expect(wrap.find('div').html()).toEqual(mockLoading);
  });
});