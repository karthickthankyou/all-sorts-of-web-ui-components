import React from 'react';
import { render } from '@testing-library/react';
import CardBlog02 from './CardBlog02';

describe('CardBlog02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardBlog02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
