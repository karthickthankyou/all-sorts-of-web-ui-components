import React from 'react';
import { render } from '@testing-library/react';
import Newsletter01 from './Newsletter01';

describe('Newsletter01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Newsletter01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
