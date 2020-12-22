import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardBlog03, { ICardBlog03Props } from './CardBlog03';

export default {
  title: 'blogSections/BlogSection03/cards/CardBlog03',
  component: CardBlog03,
} as Meta;

const Template: Story<ICardBlog03Props> = (args) => <CardBlog03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: 'Mar 16, 2020',
  title: "Boost your conversion rate",
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum, ex iure autem qui error suscipit aperiam consequuntur cupiditate, laudantium dolores aspernatur quam corrupti rerum!'
};
