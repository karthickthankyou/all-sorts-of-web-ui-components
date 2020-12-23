import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Newsletter02, {INewsletter02Props} from './Newsletter02';

export default {
  title: 'newsletterSections/Newsletter02',
  component: Newsletter02,
} as Meta;

const Template: Story<INewsletter02Props> = (args) => <Newsletter02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
