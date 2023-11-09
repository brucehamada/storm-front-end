import { StoryObj, Meta } from '@storybook/react';
import { SignUp } from './signup';
const meta = {
  title: 'SignUp',
  component: SignUp,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    mode: { control: { type: 'select', options: ['customer', 'expert'] } },
    fullName: { control: 'text' },
    email: { control: 'text' },
    password: { control: 'text' },
    confirmPassword: { control: 'text' },
    agreePolicy: { control: { type: 'boolean' } }
  },
  tags: ['SignUp']
} satisfies Meta<typeof SignUp>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    mode: 'customer',
    fullName: '<NAME>',
    email: '<EMAIL>',
    password: 'password',
    confirmPassword: 'password',
    agreePolicy: true
  }
};

