import HiringContractCard from 'components/molecules/expert/hiringcontractcard'

const HiringContractItem = {
    contractId: 'FK39455',
    contractType: 'Project-Hourly',
    rate: '$120/Hour',
    hoursOfEngagementPerWeek: '12 Hours/Week',
    startDate: '22nd June 2023',
    expertInfo: '',
    name: 'Jane Doe',
    companyDetails: '',
    clientName: 'Client Name',
    companyName: 'XYZ Company Pvt ltd',
    location: 'Riyadh, KSA'
}

const ExpertHiringContract = () => {
    return(
        <HiringContractCard item={HiringContractItem}/>
    );
}

export default ExpertHiringContract;