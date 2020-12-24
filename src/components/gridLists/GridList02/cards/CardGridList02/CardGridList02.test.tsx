import React from 'react';
import { render } from '@testing-library/react';
import CardGridList02 from './CardGridList02';

describe('CardGridList02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardGridList02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
