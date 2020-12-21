import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TeamSection02, {ITeamSection02Props} from './TeamSection02';

export default {
  title: 'teamSections/TeamSection02',
  component: TeamSection02,
} as Meta;

const Template: Story<ITeamSection02Props> = (args) => <TeamSection02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
