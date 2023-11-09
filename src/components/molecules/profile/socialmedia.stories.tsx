import { StoryObj, Meta } from '@storybook/react';
import { SocialMedia } from './socialmedia';
const meta = {
  title: 'Social Media',
  component: SocialMedia,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    LinkedIn: String,
    PersonalWebsite: String
  },
  tags: ['Socail Media']
} satisfies Meta<typeof SocialMedia>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    LinkedIn: 'https://linkedin/...',
    PersonalWebsite: 'https://github.com/...'
  }
};
