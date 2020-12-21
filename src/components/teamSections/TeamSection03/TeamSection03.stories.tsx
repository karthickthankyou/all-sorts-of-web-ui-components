import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TeamSection03, {ITeamSection03Props} from './TeamSection03';

export default {
  title: 'teamSections/TeamSection03',
  component: TeamSection03,
} as Meta;

const Template: Story<ITeamSection03Props> = (args) => <TeamSection03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
