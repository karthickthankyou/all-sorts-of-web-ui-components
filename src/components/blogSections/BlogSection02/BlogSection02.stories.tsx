import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BlogSection02, {IBlogSection02Props} from './BlogSection02';

export default {
  title: 'blogSections/BlogSection02',
  component: BlogSection02,
} as Meta;

const Template: Story<IBlogSection02Props> = (args) => <BlogSection02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
