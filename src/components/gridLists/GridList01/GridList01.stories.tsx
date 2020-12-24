import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GridList01, {IGridList01Props} from './GridList01';

export default {
  title: 'gridLists/GridList01',
  component: GridList01,
} as Meta;

const Template: Story<IGridList01Props> = (args) => <GridList01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
