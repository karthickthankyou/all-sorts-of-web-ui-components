import React from 'react';
import { render } from '@testing-library/react';
import FAQ02 from './FAQ02';

describe('FAQ02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<FAQ02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
