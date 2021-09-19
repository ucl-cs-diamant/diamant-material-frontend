import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import LeaderboardToolbar from '../components/leaderboards/LeaderboardToolbar';
import LeaderboardResults from '../components/leaderboards/LeaderboardResults';

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main_leaderboard: [],

      offset: 0,
      perPage: 5,
      currentPage: 0,
      pageCount: 0,
    };
  }

  load_user_elos() {
    fetch(
      `http://192.168.135.128:8000/user_performances/?format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pageCount: Math.ceil(data.count / this.state.perPage),

          main_leaderboard: data.results,
        });
      });
  }

  componentDidMount() {
    this.load_user_elos();
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Leaderboards</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <LeaderboardToolbar />
            <Box sx={{ pt: 3 }}>
              <LeaderboardResults leaderboard={this.state.main_leaderboard} />
            </Box>
          </Container>
        </Box>
      </>
    );
  }

}

export default Leaderboards;
