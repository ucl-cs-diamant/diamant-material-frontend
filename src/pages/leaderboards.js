import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Card, CardContent, Container, InputAdornment, SvgIcon, TextField } from '@material-ui/core';
import LeaderboardResults from '../components/leaderboards/LeaderboardResults';
import { Search as SearchIcon } from 'react-feather';

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main_leaderboard: [],
      filtered_leaderboard: [],
      filtervalue: "",

      offset: 0,
      perPage: 5,
      currentPage: 0,
      pageCount: 0,
    };
    this.handlechange = this.handlechange.bind(this);
    this.filtertable = this.filtertable.bind(this)
  }

  load_user_elos() {
    fetch(
      `http://localhost:8000/api/user_performances/?format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pageCount: Math.ceil(data.count / this.state.perPage),

          main_leaderboard: data.results,
          filtered_leaderboard: data.results,
        });
      });
  }

  componentDidMount() {
    this.load_user_elos();
  }

  filtertable() {
    this.setState({filtered_leaderboard:
        this.state.main_leaderboard.filter(item => item.user_name===null?
          ('Bot#'+ item.pk).includes(this.state.filtervalue):
          item.user_name.includes(this.state.filtervalue))})
  }

  handlechange(event) {
    this.setState({ filtervalue: event.target.value }, () => this.filtertable())
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
            <Box>
              <Box sx={{ mt: 3 }}>
                <Card>
                  <CardContent>
                    <Box sx={{ maxWidth: 500 }}>
                      <TextField
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SvgIcon
                                fontSize="small"
                                color="action"
                              >
                                <SearchIcon />
                              </SvgIcon>
                            </InputAdornment>
                          )
                        }}
                        placeholder="Search Player"
                        variant="outlined"
                        onChange={this.handlechange}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box sx={{ pt: 3 }}>
              <LeaderboardResults leaderboard={this.state.filtered_leaderboard} />
            </Box>
          </Container>
        </Box>
      </>
    );
  }

}

export default Leaderboards;
