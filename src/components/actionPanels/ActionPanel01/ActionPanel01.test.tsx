import React from 'react';
import { render } from '@testing-library/react';
import ActionPanel01 from './ActionPanel01';

describe('ActionPanel01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ActionPanel01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
