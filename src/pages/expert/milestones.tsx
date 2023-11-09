import MilestonesCard from 'components/molecules/expert/milestonescard'

const MilestonesCardItem = [
    {
        name: 'Milestone 1',
        text: 'Lorem ipsum dolor sit amet consectetur',
        date: '5th April 2023',
        status: 'Upcoming',
        action: 'Mark as Completed'
    },
    {
        name: 'Milestone 2',
        text: 'Lorem ipsum dolor sit amet consectetur',
        date: '5th April 2023',
        status: 'Upcoming',
        action: 'Start  now'
    },
    {
        name: 'Milestone 3',
        text: 'Lorem ipsum dolor sit amet consectetur',
        date: '5th April 2023',
        status: 'Upcoming',
        action: 'Start Now'
    }
]

const ExpertMilestones = () => {
    return(
        <MilestonesCard item={MilestonesCardItem}/>
    );
}

export default ExpertMilestones;