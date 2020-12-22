import React from 'react';
import { render } from '@testing-library/react';
import BlogSection02 from './BlogSection02';

describe('BlogSection02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<BlogSection02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
