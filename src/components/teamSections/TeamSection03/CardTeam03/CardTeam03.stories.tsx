import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import picture from '../../../../assets/portrait.jpg'
import CardTeam03, { ICardTeam03Props } from './CardTeam03';

export default {
  title: 'teamSections/TeamSection03/CardTeam03',
  component: CardTeam03,
} as Meta;

const Template: Story<ICardTeam03Props> = (args) => <CardTeam03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Floyd Miles',
  role: 'Senior Designer',
  picture: picture
};
