import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FAQ01, {IFAQ01Props} from './FAQ01';

export default {
  title: 'faqSections/FAQ01',
  component: FAQ01,
} as Meta;

const Template: Story<IFAQ01Props> = (args) => <FAQ01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
