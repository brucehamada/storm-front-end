import { StoryObj, Meta } from '@storybook/react';
import { EditClientInfo } from './clientinfo';
const meta = {
  title: 'Edit Client Info',
  component: EditClientInfo,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    proficiencies: [] as string[],
  },
  tags: ['Socail Media']
} satisfies Meta<typeof EditClientInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    proficiencies: ['native or bilangual', 'fluent', 'conversational']
  }
};
