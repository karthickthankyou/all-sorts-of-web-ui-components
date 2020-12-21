import React from 'react';
import { render } from '@testing-library/react';
import CardTeam02 from './CardTeam02';

describe('CardTeam02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardTeam02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
