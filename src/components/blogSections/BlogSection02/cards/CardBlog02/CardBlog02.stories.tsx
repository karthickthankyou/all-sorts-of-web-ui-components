import React from 'react';
import picture from '../../../../../assets/portrait.jpg'
import { Story, Meta } from '@storybook/react/types-6-0';
import CardBlog02, { ICardBlog02Props } from './CardBlog02';

export default {
  title: 'blogSections/BlogSection02/cards/CardBlog02',
  component: CardBlog02,
} as Meta;

const Template: Story<ICardBlog02Props> = (args) => <CardBlog02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  blogType: 'Article',
  title: 'Boost your conversion rate',
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sit recusandae reprehenderit velit, rem repudiandae eaque?",
  author: {
    avatar: picture,
    name: 'Paul York'
  },
  date: "Mar 16, 2020",
  readDuration: '6 min read'
};

