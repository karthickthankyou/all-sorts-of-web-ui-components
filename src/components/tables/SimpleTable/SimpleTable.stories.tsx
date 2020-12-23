import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SimpleTable, { ISimpleTableProps } from './SimpleTable';
import picture from '../../../assets/portrait.jpg'

export default {
  title: 'tables/SimpleTable',
  component: SimpleTable,
} as Meta;

const employeeData = [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    jobTitle: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    avatar: picture

  },

  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    jobTitle: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    avatar: picture
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    jobTitle: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    avatar: picture
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    jobTitle: "Central Security Manager",
    department: "Program",
    status: "Active",
    role: "Member",
    avatar: picture
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    jobTitle: "Lead Implementation Liaison",
    department: "Mobility",
    status: "Active",
    role: "Admin",
    avatar: picture
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    jobTitle: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    avatar: picture
  },
]


const Template: Story<ISimpleTableProps> = (args) => <SimpleTable {...args} />;

export const Zebra = Template.bind({});
Zebra.args = {
  employeeData: employeeData,
  variant: 'zebra'
};
export const Divider = Template.bind({});
Divider.args = {
  employeeData: employeeData,
  variant: 'divider'
};
