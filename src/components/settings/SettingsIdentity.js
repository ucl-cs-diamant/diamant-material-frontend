import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid, InputLabel, MenuItem, Select
} from '@material-ui/core';

class SettingsIdentity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      selected_option: 0,
      display_name: "",
      options: [],

    }
    this.handleDisplaychange = this.handleDisplaychange.bind(this);
    this.handleCheckboxchange = this.handleCheckboxchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch(
      `http://192.168.135.128/api/settings/account_settings/?format=json`,
      {credentials: 'include'}
    )
      .then((response) => response.json())
      .then((data) => {
        let tempoptions = []
        for (const [key,value] of Object.entries(data.display_name_options)) {
          tempoptions.push(<MenuItem key={value.option} value={value.option}>{key}: {value.value}</MenuItem>)
        }
        this.setState({
          hidden: data.hide_identity,
          display_name: data.display_name,
          selected_option: data.display_name,
          options: tempoptions
        });
      });
  }

  handleCheckboxchange(event) {
    this.setState({
      hidden: event.target.checked
    })
  }

  handleDisplaychange(event) {
    this.setState({
      selected_option: event.target.value
    })
  }

  handleSubmit() {
    const response = fetch("http://192.168.135.128/api/settings/account_settings/", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({hide_identity: this.state.hidden, display_name: this.state.selected_option}) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <Card>
          <CardHeader
            subheader="Manage"
            title="Identity Settings"
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
                xs={2}
              >
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      checked={this.state.hidden}
                      onChange={this.handleCheckboxchange}
                      margin="normal"
                    />
                  )}
                  label="Hide Identity"
                />
              </Grid>
              <Grid
                item
                xs={10}
              >
                {/*<TextField*/}
                {/*  fullWidth*/}
                {/*  label="Display Name"*/}
                {/*  margin="normal"*/}
                {/*  name="displayname"*/}
                {/*  onChange={this.handleDisplaychange}*/}
                {/*  type="text"*/}
                {/*  // value={values.password}*/}
                {/*  variant="outlined"*/}
                {/*/>*/}
                <InputLabel id="display_name">Display Name</InputLabel>
                <Select
                  sx={{width: 1}}
                  labelId="display_name"
                  id="display_name"
                  value={this.state.selected_option}
                  label={this.state.display_name}
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




// const SettingsIdentity = (props) => (
//   <form {...props}>
//     <Card>
//       <CardHeader
//         subheader="Manage"
//         title="Notifications"
//       />
//       <Divider />
//       <CardContent>
//         <Grid
//           container
//           spacing={6}
//           wrap="wrap"
//         >
//           <Grid
//             item
//             md={4}
//             sm={6}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column'
//             }}
//             xs={12}
//           >
//             <Typography
//               color="textPrimary"
//               gutterBottom
//               variant="h6"
//             >
//               Notifications
//             </Typography>
//             <FormControlLabel
//               control={(
//                 <Checkbox
//                   color="primary"
//                   defaultChecked
//                 />
//               )}
//               label="Email"
//             />
//             <FormControlLabel
//               control={(
//                 <Checkbox
//                   color="primary"
//                   defaultChecked
//                 />
//               )}
//               label="Push Notifications"
//             />
//             <FormControlLabel
//               control={<Checkbox />}
//               label="Text Messages"
//             />
//             <FormControlLabel
//               control={(
//                 <Checkbox
//                   color="primary"
//                   defaultChecked
//                 />
//               )}
//               label="Phone calls"
//             />
//           </Grid>
//           <Grid
//             item
//             md={4}
//             sm={6}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column'
//             }}
//             xs={12}
//           >
//             <Typography
//               color="textPrimary"
//               gutterBottom
//               variant="h6"
//             >
//               Messages
//             </Typography>
//             <FormControlLabel
//               control={(
//                 <Checkbox
//                   color="primary"
//                   defaultChecked
//                 />
//               )}
//               label="Email"
//             />
//             <FormControlLabel
//               control={<Checkbox />}
//               label="Push Notifications"
//             />
//             <FormControlLabel
//               control={(
//                 <Checkbox
//                   color="primary"
//                   defaultChecked
//                 />
//               )}
//               label="Phone calls"
//             />
//           </Grid>
//         </Grid>
//       </CardContent>
//       <Divider />
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'flex-end',
//           p: 2
//         }}
//       >
//         <Button
//           color="primary"
//           variant="contained"
//         >
//           Save
//         </Button>
//       </Box>
//     </Card>
//   </form>
// );

export default SettingsIdentity;
