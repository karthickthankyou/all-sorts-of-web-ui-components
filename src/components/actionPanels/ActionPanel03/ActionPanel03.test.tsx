import React from 'react';
import { render } from '@testing-library/react';
import ActionPanel03 from './ActionPanel03';

describe('ActionPanel03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ActionPanel03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
