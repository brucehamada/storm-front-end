import { StoryObj, Meta } from '@storybook/react';
import { ForgotPassword } from './forgotpassword';
const meta = {
  title: 'ForgotPassword',
  component: ForgotPassword,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    email: { control: 'text' }
  },
  tags: ['ForgotPassword']
} satisfies Meta<typeof ForgotPassword>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    email: '<EMAIL>'
  }
};

