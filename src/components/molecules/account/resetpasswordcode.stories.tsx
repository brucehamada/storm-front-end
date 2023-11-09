import { Meta, StoryObj } from '@storybook/react';
import  ResetPasswordCode  from './resetpasswordcode';
const meta = {
  title: 'Reset Password Code',
  component: ResetPasswordCode,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    email: { control: { type: 'text' } }
  },
  tags: ['ResetPasswordCode']
} satisfies Meta<typeof ResetPasswordCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: ''
  }
};
export const WithEmail: Story = {
    args: {
        email: 'johndoe@example.com'
    }
};
