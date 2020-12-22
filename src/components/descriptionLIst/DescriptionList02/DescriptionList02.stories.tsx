import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DescriptionList02, {IDescriptionList02Props} from './DescriptionList02';

export default {
  title: 'descriptionList/DescriptionList02',
  component: DescriptionList02,
} as Meta;

const Template: Story<IDescriptionList02Props> = (args) => <DescriptionList02 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
