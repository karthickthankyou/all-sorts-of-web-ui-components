import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActionPanel05, { IActionPanel05Props } from './ActionPanel05';

export default {
  title: 'actionPanels/ActionPanel05',
  component: ActionPanel05,
} as Meta;

const Template: Story<IActionPanel05Props> = (args) => <div className="bg-white d-flex justify-center p-5"><ActionPanel05 {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Need more bandwidth?',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at facere sapiente.',
  buttonText: "Contact sales"

};
