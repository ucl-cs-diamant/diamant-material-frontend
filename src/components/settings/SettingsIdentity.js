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
      selected_option: "github_username",
      display_name: "placeholder",

    }
    this.handleDisplaychange = this.handleDisplaychange.bind(this);
    this.handleCheckboxchange = this.handleCheckboxchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {

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

  handleSubmit(event) {
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({hide_identity: this.state.hidden, display_name: })
    // }
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
                  value={this.state.display_name}
                  label={this.state.display_name}
                  variant='outlined'
                  onChange={this.handleDisplaychange}
                >
                  <MenuItem value={this.state.selected_option}>{this.state.selected_option}: {this.state.options[i]}</MenuItem>
                  <MenuItem value={2}>{this.state.display_name}</MenuItem>
                  <MenuItem value={3}>{this.state.display_name}</MenuItem>
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
