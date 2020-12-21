import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardTeamSection01, { ICardTeamSection01Props } from './CardTeamSection01';

import picture from '../../../../assets/portrait.jpg'

export default {
  title: 'teamSections/TeamSection01/CardTeamSection01',
  component: CardTeamSection01,
} as Meta;

const Template: Story<ICardTeamSection01Props> = (args) => <CardTeamSection01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Lindsay Walton",
  role: "Front-end Developer",
  picture: picture
};
