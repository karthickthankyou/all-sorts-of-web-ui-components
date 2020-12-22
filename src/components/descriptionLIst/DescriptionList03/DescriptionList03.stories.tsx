import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DescriptionList03, {IDescriptionList03Props} from './DescriptionList03';

export default {
  title: 'descriptionList/DescriptionList03',
  component: DescriptionList03,
} as Meta;

const Template: Story<IDescriptionList03Props> = (args) => <DescriptionList03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
