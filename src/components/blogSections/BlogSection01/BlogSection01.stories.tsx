import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BlogSection01, {IBlogSection01Props} from './BlogSection01';

export default {
  title: 'blogSections/BlogSection01',
  component: BlogSection01,
} as Meta;

const Template: Story<IBlogSection01Props> = (args) => <BlogSection01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
