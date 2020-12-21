import React from 'react';
import { render } from '@testing-library/react';
import CardTeam03 from './CardTeam03';

describe('CardTeam03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardTeam03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
