import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FAQ03, { IFAQ03Props } from './FAQ03';

export default {
  title: 'faqSections/FAQ03',
  component: FAQ03,
} as Meta;

const faqData = [
  { id: '1', title: "Ipsum dolor sit amet consectetur 1", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '2', title: "Lorem ipsum dolor amet consectetur 2", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '3', title: "Lorem ipsum sit amet 3", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '4', title: "Lorem dolor sit amet consectetur 4", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '5', title: "Ipsum dolor sit amet 5", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '6', title: <div className="text-primary-500">Lorem ipsum dolor sit amet consectetur 6</div>, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
]

const Template: Story<IFAQ03Props> = (args) => <FAQ03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  faqData: faqData
};
