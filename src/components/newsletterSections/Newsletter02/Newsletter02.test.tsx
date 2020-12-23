import React from 'react';
import { render } from '@testing-library/react';
import Newsletter02 from './Newsletter02';

describe('Newsletter02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Newsletter02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
