import React from 'react';
import { render } from '@testing-library/react';
import TeamSection02 from './TeamSection02';

describe('TeamSection02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<TeamSection02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
