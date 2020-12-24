import React from 'react';
import { render } from '@testing-library/react';
import CardGridList01 from './CardGridList01';

describe('CardGridList01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardGridList01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
