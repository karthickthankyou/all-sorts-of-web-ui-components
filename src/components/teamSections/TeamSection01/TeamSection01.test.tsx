import React from 'react';
import { render } from '@testing-library/react';
import TeamSection01 from './TeamSection01';

describe('TeamSection01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<TeamSection01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
