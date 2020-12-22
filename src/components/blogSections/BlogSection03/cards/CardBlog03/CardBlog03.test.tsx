import React from 'react';
import { render } from '@testing-library/react';
import CardBlog03 from './CardBlog03';

describe('CardBlog03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardBlog03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
