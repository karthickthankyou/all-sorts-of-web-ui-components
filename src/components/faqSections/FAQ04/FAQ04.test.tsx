import React from 'react';
import { render } from '@testing-library/react';
import FAQ04 from './FAQ04';

describe('FAQ04 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<FAQ04 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
