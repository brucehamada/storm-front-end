import { StoryObj, Meta } from '@storybook/react';
import { AccountSettings } from './accountsettings';
const meta = {
  title: 'Account Settings',
  component: AccountSettings,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {},
  tags: ['Account Settings']
} satisfies Meta<typeof AccountSettings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
