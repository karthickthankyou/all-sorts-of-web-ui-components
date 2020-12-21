import React from 'react';
import { render } from '@testing-library/react';
import CardTeamSection01 from './CardTeamSection01';

describe('CardTeamSection01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CardTeamSection01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
