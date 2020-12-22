import React from 'react';
import { render } from '@testing-library/react';
import CardBlogSection01 from './CardBlogSection01';

describe('CardBlogSection01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardBlogSection01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
