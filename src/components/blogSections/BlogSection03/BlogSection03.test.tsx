import React from 'react';
import { render } from '@testing-library/react';
import BlogSection03 from './BlogSection03';

describe('BlogSection03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<BlogSection03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
