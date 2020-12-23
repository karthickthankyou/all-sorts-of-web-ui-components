import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion, { IAccordionProps } from './Accordion';
import { Divider } from '../../descriptionLIst/DescriptionList01/DescriptionList01.stories';

export default {
  title: 'common/Accordion',
  component: Accordion,
} as Meta;

const accordionData = [
  { id: '1', title: "Title 1", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '2', title: "Title 2", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '3', title: "Title 3", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '4', title: "Title 4", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '5', title: "Title 5", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '6', title: "Title 6", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
]


const SimpleTemplate: Story<IAccordionProps> = (args) => {
  return (
    <div>
      {
        accordionData.map(({ id, title, content }) => {
          return (
            <Accordion
              id={id}
              title={title}
              content={content}
            />
          )
        })
      }
    </div>
  )
};

const Template: Story<IAccordionProps> = (args) => {
  return (
    <div>
      {
        accordionData.map(({ id, title, content }) => {
          return (
            <Accordion
              id={id}
              title={
                <div className="text-primary-500 d-grid grid-cols-3">
                  <div>{title}</div>
                </div>
              }
              content={
                <div className="text-grey-500 d-grid grid-cols-3 gap-2">
                  <div>{content}</div>
                  <div>{content}</div>
                  <div>{content}</div>
                </div>
              }
            />
          )
        })
      }
    </div>
  )
};

export const Simple = SimpleTemplate.bind({});
Simple.args = {};

export const Primary = Template.bind({});
Primary.args = {};
