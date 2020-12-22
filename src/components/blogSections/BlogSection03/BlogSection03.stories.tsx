import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BlogSection03, {IBlogSection03Props} from './BlogSection03';

export default {
  title: 'blogSections/BlogSection03',
  component: BlogSection03,
} as Meta;

const Template: Story<IBlogSection03Props> = (args) => <BlogSection03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
