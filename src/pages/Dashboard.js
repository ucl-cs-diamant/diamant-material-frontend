import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
// import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import GamesPlayedCard from '../components/dashboard/GamesPlayedCard';
import CommitTimeCard from '../components/dashboard/CommitTimeCard';
import CodeFailingCard from '../components/dashboard/CodeFailingCard';
import TrafficByDevice from '../components/dashboard/TrafficByDevice';
import MMRCard from '../components/dashboard/MMRCard';
import MatchHistoryCard from '../components/dashboard/MatchHistoryCard';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      email_address: '',
      github_username: '',
      student_id: '',

      mmr: '',
      games_played: '',

      commit_time: '',
      has_failed: '',

      offset: 0,
      perPage: 5,
      currentPage: 0,
      pageCount: 0,

      match_history: []

    };
    // this.handlePageClick = this.handlePageClick.bind(this);
  }

  load_match_history() {
    fetch(
      `http://192.168.135.128:8000/users/102/user_match_list/?format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pageCount: Math.ceil(data.count / this.state.perPage),
          match_history: data.results,
        });
      });
  }
  // }

  componentDidMount() {
    fetch('http://192.168.135.128:8000/users/102/?format=json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ email_address: data.email_address });
        this.setState({ github_username: data.github_username });
        this.setState({ student_id: data.student_id });
      });
    fetch('http://192.168.135.128:8000/users/102/performance_list/?format=json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user_name: data[0].user_name });
        this.setState({ mmr: data[0].mmr });
        this.setState({ games_played: data[0].games_played });
      });
    fetch('http://192.168.135.128:8000/users/102/user_code_list/?format=json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          commit_time: Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }).format(new Date(data[0].commit_time)),
        });
        this.setState({ has_failed: data[0].has_failed });
      });
    this.load_match_history();
  }

  render() {
    return (
    <>
      <Helmet>
        <title>Dashboard | Player Home</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <MMRCard mmr={this.state.mmr}/>
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <CommitTimeCard commit_time={this.state.commit_time} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <GamesPlayedCard games_played={this.state.games_played}/>
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <CodeFailingCard sx={{ height: '100%' }} has_failed={this.state.has_failed.toString()}/>
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Sales />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TrafficByDevice sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <MatchHistoryCard match_history={this.state.match_history}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
    )
  }
}


// const Dashboard = () => (
//   <>
//     <Helmet>
//       <title>Dashboard | Player Home</title>
//     </Helmet>
//     <Box
//       sx={{
//         backgroundColor: 'background.default',
//         minHeight: '100%',
//         py: 3
//       }}
//     >
//       <Container maxWidth={false}>
//         <Grid
//           container
//           spacing={3}
//         >
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <Budget />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TotalCustomers />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TasksProgress />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TotalProfit sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={8}
//             md={12}
//             xl={9}
//             xs={12}
//           >
//             <Sales />
//           </Grid>
//           <Grid
//             item
//             lg={4}
//             md={6}
//             xl={3}
//             xs={12}
//           >
//             <TrafficByDevice sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={4}
//             md={6}
//             xl={3}
//             xs={12}
//           >
//             <LatestProducts sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={8}
//             md={12}
//             xl={9}
//             xs={12}
//           >
//             <LatestOrders />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   </>
// );

export default Dashboard;
