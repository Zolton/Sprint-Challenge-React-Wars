import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
import StarWarsChars from './components/StarWarsChars';

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<StarWarsChars />', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<StarWarsChars />).toJSON();
  
      expect(tree).toMatchSnapshot();
    });
  });