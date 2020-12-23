import React from 'react';
import { render } from '@testing-library/react';
import SimpleTable from './SimpleTable';

describe('SimpleTable Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<SimpleTable />);
    expect(asFragment()).toMatchSnapshot();
  });
});
