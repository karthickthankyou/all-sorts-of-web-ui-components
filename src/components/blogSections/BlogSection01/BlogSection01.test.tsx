import React from 'react';
import { render } from '@testing-library/react';
import BlogSection01 from './BlogSection01';

describe('BlogSection01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<BlogSection01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
