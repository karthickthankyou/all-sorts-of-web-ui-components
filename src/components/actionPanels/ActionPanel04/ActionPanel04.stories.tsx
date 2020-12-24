import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActionPanel04, { IActionPanel04Props } from './ActionPanel04';

export default {
  title: 'actionPanels/ActionPanel04',
  component: ActionPanel04,
} as Meta;

const Template: Story<IActionPanel04Props> = (args) => <ActionPanel04 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Update your email',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum explicabo praesentium reiciendis debitis.',
  buttonText: 'Save',
  buttonColor: 'primary',
};
