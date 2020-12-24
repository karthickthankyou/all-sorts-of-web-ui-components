import React from 'react';
import { render } from '@testing-library/react';
import GridList03 from './GridList03';

describe('GridList03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<GridList03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
