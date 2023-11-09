import { StoryObj, Meta } from '@storybook/react';
import { SetNewPassword } from './setnewpassword';
const meta = {
  title: 'Set New Password',
  component: SetNewPassword,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    password: { control: 'text' },
    confirmPassword: { control: 'text' }
  },
  tags: ['SetNewPassword']
} satisfies Meta<typeof SetNewPassword>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    password: '<EMAIL>',
    confirmPassword: '<EMAIL>'
  }
};

