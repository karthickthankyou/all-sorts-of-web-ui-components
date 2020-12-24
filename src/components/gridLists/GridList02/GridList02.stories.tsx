import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GridList02, {IGridList02Props} from './GridList02';

export default {
  title: 'gridLists/GridList02',
  component: GridList02,
} as Meta;

const Template: Story<IGridList02Props> = (args) => <GridList02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
