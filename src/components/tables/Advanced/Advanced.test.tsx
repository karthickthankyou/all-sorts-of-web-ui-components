import React from 'react';
import { render } from '@testing-library/react';
import Advanced from './Advanced';

describe('Advanced Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Advanced />);
    expect(asFragment()).toMatchSnapshot();
  });
});
