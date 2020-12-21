import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TeamSection01, {ITeamSection01Props} from './TeamSection01';

export default {
  title: 'teamSections/TeamSection01',
  component: TeamSection01,
} as Meta;

const Template: Story<ITeamSection01Props> = (args) => <TeamSection01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
