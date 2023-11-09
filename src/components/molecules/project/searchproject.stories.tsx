import { StoryObj, Meta } from '@storybook/react';
import { SearchProject } from './searchproject';
const meta = {
  title: 'Search project',
  component: SearchProject,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {},
  tags: ['Socail Media']
} satisfies Meta<typeof SearchProject>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
