import React from 'react';
import { render } from '@testing-library/react';
import ActionPanel04 from './ActionPanel04';

describe('ActionPanel04 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ActionPanel04 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
