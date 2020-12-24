import React from 'react';
import picture from '../../../../../assets/portrait.jpg'
import { Story, Meta } from '@storybook/react/types-6-0';
import CardGridList02, { ICardGridList02Props } from './CardGridList02';

export default {
  title: 'gridLists/GridList02/cards/CardGridList02',
  component: CardGridList02,
} as Meta;

const Template: Story<ICardGridList02Props> = (args) => <CardGridList02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  displayName: "Jane Cooper",
  jobTitle: "Regional Paradigm Technician",
  role: 'Admin',
  avatar: picture
};

