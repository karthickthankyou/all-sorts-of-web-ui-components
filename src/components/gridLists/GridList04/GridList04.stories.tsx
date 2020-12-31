import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GridList04, { IGridList04Props } from './GridList04';

export default {
  title: 'gridLists/GridList04',
  component: GridList04,
} as Meta;

const data = [
  {
    name: "Karthick Ragavendran",
    role: "Co-Founded / CEO"
  },
  {
    name: "Karthick Ragavendran",
    role: "Co-Founded / CEO"
  },
  {
    name: "Karthick Ragavendran",
    role: "Co-Founded / CEO"
  },
  {
    name: "Karthick Ragavendran",
    role: "Co-Founded / CEO"
  },
]

const Template: Story<IGridList04Props> = (args) => <GridList04 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  employeeData: data
};
