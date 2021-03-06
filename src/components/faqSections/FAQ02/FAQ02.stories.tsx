import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FAQ02, { IFAQ02Props } from './FAQ02';

export default {
  title: 'faqSections/FAQ02',
  component: FAQ02,
} as Meta;

const faqData = [
  { id: '1', title: "Ipsum dolor sit amet consectetur 1", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '2', title: "Lorem ipsum dolor amet consectetur 2", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '3', title: "Lorem ipsum sit amet 3", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '4', title: "Lorem dolor sit amet consectetur 4", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
]

const Template: Story<IFAQ02Props> = (args) => <FAQ02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  faqData
};
