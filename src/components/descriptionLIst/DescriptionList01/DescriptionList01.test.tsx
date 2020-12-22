import React from 'react';
import { render } from '@testing-library/react';
import DescriptionList01 from './DescriptionList01';

describe('DescriptionList01 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<DescriptionList01 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
