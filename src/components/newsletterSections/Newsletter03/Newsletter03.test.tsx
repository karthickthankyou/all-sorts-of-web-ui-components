import React from 'react';
import { render } from '@testing-library/react';
import Newsletter03 from './Newsletter03';

describe('Newsletter03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Newsletter03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
