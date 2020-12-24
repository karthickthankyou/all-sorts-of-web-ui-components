import React from 'react';
import { render } from '@testing-library/react';
import GridList02 from './GridList02';

describe('GridList02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<GridList02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
