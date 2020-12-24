import React from 'react';
import { render } from '@testing-library/react';
import ActionPanel02 from './ActionPanel02';

describe('ActionPanel02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ActionPanel02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
