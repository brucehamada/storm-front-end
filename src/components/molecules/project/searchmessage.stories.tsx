import { StoryObj, Meta } from '@storybook/react';
import { SearchMessage } from './searchmessage';
const meta = {
  title: 'Search messages',
  component: SearchMessage,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {},
  tags: ['Socail Media']
} satisfies Meta<typeof SearchMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  }
};
