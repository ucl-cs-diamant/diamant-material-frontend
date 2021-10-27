import React from 'react';
import {
  Box, Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputLabel, MenuItem,
  Select
} from '@material-ui/core';

class SettingsBotSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_option: 0,
      user_url: "",
      options: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDisplaychange = this.handleDisplaychange.bind(this)
  }

  componentDidMount() {
    fetch(
      `http://192.168.135.128/api/settings/account_settings/?format=json`,
      {credentials: 'include'}
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user_url: data.user.substring(0, data.user.length - 12) }, () => {
          fetch(this.state.user_url + 'user_code_list/?format=json')
            .then((response) => response.json())
            .then((data) => {
              let tempoptions = []
              data.map((item) => {
                {
                  item.primary === true ?
                    tempoptions.push(<MenuItem key={item.id} value={item.id}>Primary: {item.branch} - {item.commit_time}</MenuItem>) :
                    tempoptions.push(<MenuItem key={item.id} value={item.id}>{item.branch} - {item.commit_time}</MenuItem>)
                }
              })
              this.setState({
                options: tempoptions
                })
              })
            })
        })
  };

  handleDisplaychange(event) {
    this.setState({
      selected_option: event.target.value
    })
  }

  handleSubmit() {
    const response = fetch("http://192.168.135.128/api/settings/enabled_codes/", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({"primary": this.state.selected_option}) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <Card>
        <CardHeader
          subheader="Primary bot"
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
              <InputLabel id="bot_selection">Primary Bot</InputLabel>
              <Select
                sx={{width: 1}}
                labelId="bot_selection"
                id="bot_selection"
                value={this.state.selected_option}
                variant='outlined'
                onChange={this.handleDisplaychange}
              >
                {this.state.options.map((item) => (
                  item
                ))}
              </Select>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
    )
  }
}

export default SettingsBotSelection;
