import React from 'react';
import { render } from '@testing-library/react';
import ActionPanel05 from './ActionPanel05';

describe('ActionPanel05 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ActionPanel05 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
