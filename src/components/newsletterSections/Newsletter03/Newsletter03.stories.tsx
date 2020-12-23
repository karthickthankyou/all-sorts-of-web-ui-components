import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Newsletter03, {INewsletter03Props} from './Newsletter03';

export default {
  title: 'newsletterSections/Newsletter03',
  component: Newsletter03,
} as Meta;

const Template: Story<INewsletter03Props> = (args) => <Newsletter03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
