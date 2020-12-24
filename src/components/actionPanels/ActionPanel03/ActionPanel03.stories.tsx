import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActionPanel03, { IActionPanel03Props } from './ActionPanel03';

export default {
  title: 'actionPanels/ActionPanel03',
  component: ActionPanel03,
} as Meta;

const Template: Story<IActionPanel03Props> = (args) => <ActionPanel03 {...args} />;

export const ButtonStart = Template.bind({});
ButtonStart.args = {
  title: 'Software for all your needs',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Download now',
  buttonColor: 'primary',
  buttonPosition: "start",
};

export const ButtonCenter = Template.bind({});
ButtonCenter.args = {
  title: 'Software for all your needs',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Download now',
  buttonColor: 'primary',
  buttonPosition: "center",
};

export const ButtonEnd = Template.bind({});
ButtonEnd.args = {
  title: 'Software for all your needs',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Download now',
  buttonColor: 'primary',
  buttonPosition: "end",
};


