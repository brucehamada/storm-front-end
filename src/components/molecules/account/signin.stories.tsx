import { StoryObj, Meta } from '@storybook/react';
import  SignIn  from './signin';
const meta = {
  title: 'SignIn',
  component: SignIn,
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    mode: { control: { type: 'select', options: ['customer', 'expert'] } },
    email: { control: 'text' },
    password: { control: 'text' },
    rememberMe: { control: { type: 'boolean' } }
  },
  tags: ['SignIn']
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    mode: 'customer',
    email: '<EMAIL>',
    password: 'password',
    rememberMe: true
  }
};

