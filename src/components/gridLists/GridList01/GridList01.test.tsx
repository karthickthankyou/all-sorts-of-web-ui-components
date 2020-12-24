import React from 'react';
import { render } from '@testing-library/react';
import GridList01 from './GridList01';

describe('GridList01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<GridList01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
