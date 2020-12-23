import React from 'react';
import { render } from '@testing-library/react';
import FAQ03 from './FAQ03';

describe('FAQ03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<FAQ03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
