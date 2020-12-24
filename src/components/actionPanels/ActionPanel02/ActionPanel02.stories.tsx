import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActionPanel02, { IActionPanel02Props } from './ActionPanel02';

export default {
  title: 'actionPanels/ActionPanel02',
  component: ActionPanel02,
} as Meta;

const Template: Story<IActionPanel02Props> = (args) => <ActionPanel02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Continuous integration',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Learn more about our CI features',
  buttonColor: 'primary'
};

export const DifferentIcon = Template.bind({});
DifferentIcon.args = {
  title: 'Software for all your needs',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Download now',
  buttonColor: 'green',
  buttonIcon: 'arrow-alt-circle-down'
};
