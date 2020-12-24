import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardGridList01, { ICardGridList01Props } from './CardGridList01';

export default {
  title: 'gridLists/GridList01/cards/CardGridList01',
  component: CardGridList01,
} as Meta;

const Template: Story<ICardGridList01Props> = (args) => <CardGridList01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  displayName: "Jane Cooper",
  jobTitle: "Regional Paradigm Technician",
  role: 'Admin'
};
