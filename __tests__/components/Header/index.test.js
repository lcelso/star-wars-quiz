import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../../../components/Header';

describe('Component - Loading', () => {
  it('should render correctly in "debug" mode', () => {
    const data = { error: 0, correct: 0, points: 0 }
    const component = shallow(<Header total={data} />);
  
    expect(component).toMatchSnapshot();
  });

  it('it must be possible to access the html element of the link to return', () => {
    const data = { error: 0, correct: 0, points: 0 }
    const component = mount(<Header total={data} />);
    const mockElement = '<a id="btn-back" alt="Voltar para home" href="/"><img src="/images/logo.png" width="130" alt="Star Wars"></a>'

    expect(component.find('#btn-back').html()).toEqual(mockElement);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});