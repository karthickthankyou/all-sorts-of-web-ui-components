import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DescriptionList01, {IDescriptionList01Props} from './DescriptionList01';

export default {
  title: 'descriptionList/DescriptionList01',
  component: DescriptionList01,
} as Meta;

const Template: Story<IDescriptionList01Props> = (args) => <DescriptionList01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
