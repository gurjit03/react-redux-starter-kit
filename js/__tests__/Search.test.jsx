import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Search Tests', () => {
  it('should render correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('should render the searchs correctly', () => {
    const component = shallow(<Search />);
    // console.log(expect(component.find(ShowCard).length), 'asdfasadfsadf');
    expect(component.find(ShowCard).length).toEqual(Preload.shows.length);
  });

  it('should render the correct no of components', () => {
    const filterWord = 'orange';
    const component = shallow(<Search />);
    const preventDefault = () => {}
    component.find('input.filter-movies').simulate('change', {target: { value: filterWord }},preventDefault);
    const preloadedData = Preload.shows.filter(
      show => `${show.description} ${show.title}`.toUpperCase().indexOf(filterWord.toUpperCase()) >= 0,
    );
    expect(component.find(ShowCard).length).toEqual(preloadedData.length);
  });
});
