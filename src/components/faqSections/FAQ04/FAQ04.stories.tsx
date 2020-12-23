import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FAQ04, { IFAQ04Props } from './FAQ04';

export default {
  title: 'faqSections/FAQ04',
  component: FAQ04,
} as Meta;

const faqData = [
  { id: '1', title: "Ipsum dolor sit amet consectetur 1", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '2', title: "Lorem ipsum dolor amet consectetur 2", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '3', title: "Lorem ipsum sit amet 3", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '4', title: "Lorem dolor sit amet consectetur 4", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '5', title: "Ipsum dolor sit amet 5", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '6', title: "Lorem ipsum dolor sit amet consectetur 6", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
]

const Template: Story<IFAQ04Props> = (args) => <FAQ04 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  faqData
};
