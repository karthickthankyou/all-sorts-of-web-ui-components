import React from 'react';
import { render } from '@testing-library/react';
import TeamSection03 from './TeamSection03';

describe('TeamSection03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<TeamSection03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
