import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  InputLabel, MenuItem,
  Select
} from '@material-ui/core';
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

      match_history: [],
      bot_performances: {},
      bot_codes: [],

      user_url: "",
      selected_bot: 0

    };
    this.handleDisplaychange = this.handleDisplaychange.bind(this);
  }

  load_match_history() {
    console.log(this.state.user_url + `user_match_list/`)
    fetch(this.state.user_url + `user_match_list/?format=json`)
      .then((response) => {
        if(response.status===204) {throw Error(response.statusText)}
        return response.json()
      })
      .then((data) => {
        this.setState({
          pageCount: Math.ceil(data.count / this.state.perPage),
          match_history: data.results,
        });
      })
    .catch(() => {
    })
  }

  fetchall() {
    fetch(this.state.user_url + '?format=json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ email_address: data.email_address });
        this.setState({ github_username: data.github_username });
        this.setState({ student_id: data.student_id });
      })
      fetch(this.state.user_url + 'user_code_list/?format=json')
        .then((response) => response.json())
        .then((data) => {
          this.setState({ bot_codes: data });
          this.setState({
            commit_time: Intl.DateTimeFormat('en-GB', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }).format(new Date(data[this.state.selected_bot].commit_time)),
          });
          this.setState({ has_failed: data[this.state.selected_bot].has_failed });
        }
        )
        .then(() => {
          fetch(this.state.user_url + 'performance_list/?format=json&non_primary=true')
            .then((response) => response.json())
            .then((data) => {
              this.setState({ bot_performances: Object.fromEntries(data.map((e) => [e.code,e])) }, () => {
                this.setState({
                  mmr: this.state.bot_performances[this.state.bot_codes[this.state.selected_bot].url].mmr,
                  games_played: this.state.bot_performances[this.state.bot_codes[this.state.selected_bot].url].games_played });
              });
            })
        })
      this.load_match_history();
  }

  componentDidMount() {
    fetch(
      `http://192.168.135.128/api/settings/account_settings/?format=json`,
      {credentials: 'include'}
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user_url: data.user.substring(0, data.user.length - 12) }, () =>
          this.fetchall())
      });
  }

  handleDisplaychange(event) {
    this.setState({
      selected_bot: event.target.value
    }, () => {
      this.setState({
        mmr: this.state.bot_performances[this.state.bot_codes[this.state.selected_bot].url].mmr,
        games_played: this.state.bot_performances[this.state.bot_codes[this.state.selected_bot].url].games_played,

        commit_time: Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(new Date(this.state.bot_codes[this.state.selected_bot].commit_time)),
        has_failed: this.state.bot_codes[this.state.selected_bot].has_failed
      });
    })
  }

  render() {
    return (
    <>
      <Helmet>
        <title>Dashboard | Player Home</title>
      </Helmet>

      <Card>
        <CardHeader
          title="Bot Selection"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
            alignItems="center"
          >
            <Grid
              item
              xs={10}
            >
              <InputLabel id="bot_selection">Displayed Bot</InputLabel>
              <Select
                sx={{width: 1}}
                labelId="bot_selection"
                id="bot_selection"
                value={this.state.selected_bot}
                variant='outlined'
                onChange={this.handleDisplaychange}
              >
                {this.state.bot_codes.map((item) => (
                  item.primary === true ?
                    <MenuItem key={item.id} value={this.state.bot_codes.indexOf(item)}>Primary: {item.branch} - {item.commit_time}</MenuItem> :
                    <MenuItem key={item.id} value={this.state.bot_codes.indexOf(item)}>{item.branch} - {item.commit_time}</MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

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
              {this.state.match_history===undefined?
                <MatchHistoryCard match_history={[]}/>:
                <MatchHistoryCard match_history={this.state.match_history}/>}
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
