import { StoryObj, Meta } from '@storybook/react';
import { OrganizationInfo } from './organizationinfo';
interface Specialist {
  title: string;
}
const meta = {
  title: 'Edit Organization Info',
  component: OrganizationInfo,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    industries: [] as String[],
    specialists: [] as Specialist[],
    revenues: [] as String[],
    stagesOfFunding: [] as String[],
    teamSizes: [] as String[]
  },
  tags: ['Organization Info']
} satisfies Meta<typeof OrganizationInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    industries: ['Information Technology', 'Biology', 'Chemistry'],
    specialists: [{ title: 'Information security' }, { title: 'image processing' }],
    revenues: ['100000-200000', '200000-500000'],
    stagesOfFunding: ['100000-200000', '200000-500000'],
    teamSizes: ['5-10', '10-20', '20-50', '50+']
  }
};
