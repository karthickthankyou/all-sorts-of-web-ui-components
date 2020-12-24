import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GridList03, {IGridList03Props} from './GridList03';

export default {
  title: 'gridLists/GridList03',
  component: GridList03,
} as Meta;

const Template: Story<IGridList03Props> = (args) => <GridList03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
