import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FAQ02, {IFAQ02Props} from './FAQ02';

export default {
  title: 'faqSections/FAQ02',
  component: FAQ02,
} as Meta;

const Template: Story<IFAQ02Props> = (args) => <FAQ02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
