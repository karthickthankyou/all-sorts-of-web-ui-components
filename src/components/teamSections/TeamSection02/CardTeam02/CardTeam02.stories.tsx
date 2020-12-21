import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardTeam02, { ICardTeam02Props } from './CardTeam02';
import picture from '../../../../assets/portrait.jpg'

export default {
  title: 'teamSections/TeamSection02/CardTeam02',
  component: CardTeam02,
} as Meta;

const Template: Story<ICardTeam02Props> = (args) => <CardTeam02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Leslie Alexander",
  role: 'Co-founder / CEO',
  picture: picture
};
