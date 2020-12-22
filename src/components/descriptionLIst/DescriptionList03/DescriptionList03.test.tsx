import React from 'react';
import { render } from '@testing-library/react';
import DescriptionList03 from './DescriptionList03';

describe('DescriptionList03 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<DescriptionList03 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
