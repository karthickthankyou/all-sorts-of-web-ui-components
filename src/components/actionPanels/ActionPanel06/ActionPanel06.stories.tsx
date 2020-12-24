import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActionPanel06, { IActionPanel06Props } from './ActionPanel06';

export default {
  title: 'actionPanels/ActionPanel06',
  component: ActionPanel06,
} as Meta;

const Template: Story<IActionPanel06Props> = (args) => <ActionPanel06 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardNumber: '4455',
  expiryDate: '09/25',
  lastUpdated: '22 Aug 2020',
};
