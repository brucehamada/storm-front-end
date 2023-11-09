import { StoryObj, Meta } from '@storybook/react';
import { MeetingFeedback } from './meeting-feedback';
const meta = {
  title: 'Meeting Feedback',
  component: MeetingFeedback,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    IsHelpful: String,
    MeetedExpectation: String,
    Rate: String
  },
  tags: ['Meeting Feedback']
} satisfies Meta<typeof MeetingFeedback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    IsHelpful: 'yes',
    MeetedExpectation: 'yes',
    Rate: '1'
  }
};
