import React from 'react';
import { render } from '@testing-library/react';
import GridList04 from './GridList04';

describe('GridList04 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<GridList04 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
