// project import

import { Grid } from '@mui/material';
import FindJobsSidebar from 'components/cards/findjobssidebar';
import Search from './search';
import { useState } from 'react';
import SavedJobs from './savedjobs';
import RecommendedForYou from './recommendedforyou';
import Invitations from './invitations';
import ActiveProposals from './activeproposals';
import ArchivedPropoals from './archivedproposals';

// ==============================|| SAMPLE PAGE ||============================== //
const Index = () => {
  const data = [
    { id: 1, text: 'Search', url: '/expert/findjobs-search', component: <Search /> },
    { id: 2, text: 'Saved Jobs', url: 'savedjobs', component: <SavedJobs /> },
    { id: 3, text: 'Recommended for you', url: 'recommendedforyou', component: <RecommendedForYou /> },
    { id: 4, text: 'Invitations', url: 'invitations', component: <Invitations /> },
    { id: 5, text: 'Active Proposals', url: 'activeproposals', component: <ActiveProposals /> },
    { id: 6, text: 'Archived Proposals', url: 'archivedproposals', component: <ArchivedPropoals /> }
  ];
  const [findJobSideBarItem, setFindJobSideBarItem] = useState('/expert/findjobs-search');

  return (
    <Grid container spacing={3}>
      <Grid item lg={3} xl={2}>
        <FindJobsSidebar data={data} setFindJobSideBarItem={setFindJobSideBarItem} />
      </Grid>
      {data.filter((item) => findJobSideBarItem === item.url).map((item) => item.component)}
    </Grid>
  );
};

export default Index;
