import React from 'react';
import picture from '../../../../../assets/portrait.jpg'
import { Story, Meta } from '@storybook/react/types-6-0';
import CardBlogSection01, { ICardBlogSection01Props } from './CardBlogSection01';

export default {
  title: 'blogSections/BlogSection01/cards/CardBlogSection01',
  component: CardBlogSection01,
} as Meta;

const Template: Story<ICardBlogSection01Props> = (args) => <CardBlogSection01 {...args} />;

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
