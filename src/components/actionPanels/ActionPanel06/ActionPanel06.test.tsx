import React from 'react';
import { render } from '@testing-library/react';
import ActionPanel06 from './ActionPanel06';

describe('ActionPanel06 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ActionPanel06 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
