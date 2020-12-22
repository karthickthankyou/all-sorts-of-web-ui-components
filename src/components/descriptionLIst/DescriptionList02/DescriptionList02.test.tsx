import React from 'react';
import { render } from '@testing-library/react';
import DescriptionList02 from './DescriptionList02';

describe('DescriptionList02 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<DescriptionList02 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
