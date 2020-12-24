import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActionPanel01, { IActionPanel01Props } from './ActionPanel01';

export default {
  title: 'actionPanels/ActionPanel01',
  component: ActionPanel01,
} as Meta;

const Template: Story<IActionPanel01Props> = (args) => <div className="p-5 bg-grey-200 d-flex justify-center"><ActionPanel01 {...args} /></div>;

export const DangerPanel = Template.bind({});
DangerPanel.args = {
  title: 'Delete your account',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Delete account',
  buttonColor: 'red'
};

export const SuccessPanel = Template.bind({});
SuccessPanel.args = {
  title: 'Your account got activated!',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Okay',
  buttonColor: 'green'
};

export const WarningPanel = Template.bind({});
WarningPanel.args = {
  title: 'Do you want to proceed?',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Proceed',
  buttonColor: 'yellow'
};
