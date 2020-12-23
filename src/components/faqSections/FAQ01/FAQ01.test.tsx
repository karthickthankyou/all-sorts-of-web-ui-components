import React from 'react';
import { render } from '@testing-library/react';
import FAQ01 from './FAQ01';

describe('FAQ01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<FAQ01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
