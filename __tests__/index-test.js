import React from 'react';
// for Full DOM enzyme API
import { mount } from 'enzyme';
import Index from '../index.vr';

let wrapper;

// before each test
// Witout Provider we don't have access to store
beforeEach(() => {
  wrapper = mount(<Index />);
});

it('check first scene with nav object', () => {
  expect(wrapper.find('img').length).toEqual(4);
});

// if we have same test part in differents tests we can extracnt it to
// Describe is a function that group tests with the same logic
describe('Miami contain description & back button', () => {
  // we extract textarea simulate from 2 tests and add it to befareEach
  beforeEach(() => {
    wrapper.find('button').simulate('click', {
      target: {
        scene: 'Home',
      },
    });
    wrapper.update();
  });

  it('description', () => {
    // check textarea value property
    expect(wrapper.find('div.content').text()).toEqual(
      'Miami - officially the City of Miami, is the seat of Miami-Dade County, and the cultural, economic and financial center of South Florida in the United States. The city covers an area of about 56 square miles (150 km2) between the Everglades to the west and Biscayne Bay to the east. Miami is the sixth most densely populated major city in the United States with an estimated 2018 population of 470,914. The Miami metropolitan area is home to 6.1 million people, the second-most populous in the southeastern United States and the seventh-largest in the nation. The city has the third tallest skyline in the U.S. with over 300 high-rises,55 of which exceed 490 ft (149 m)'
    );
  });

  it('button', () => {
    // we can add this to check if correct but we already have this test
    // expect(wrapper.find('textarea').prop('value')).toEqual('new comment');

    wrapper.find('button').simulate('click', {
      target: {
        scene: 'Home',
      },
    });
    wrapper.update();
  });
});

afterEach(() => {
  wrapper.unmount();
});
