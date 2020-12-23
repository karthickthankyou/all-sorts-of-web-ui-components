import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Newsletter01, {INewsletter01Props} from './Newsletter01';

export default {
  title: 'newsletterSections/Newsletter01',
  component: Newsletter01,
} as Meta;

const Template: Story<INewsletter01Props> = (args) => <Newsletter01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
