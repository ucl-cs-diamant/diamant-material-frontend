import { Helmet } from 'react-helmet';
import React from 'react';
import {
  Box, Card, CardContent,
  Container,
  Grid, InputAdornment,
  SvgIcon, TextField
} from '@material-ui/core';
import FAQs from '../__mocks__/FAQs';
import { Search as SearchIcon } from 'react-feather';
import FAQcard from '../components/FAQ/FAQcard';


class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtervalue: "",
      filtered_FAQ: FAQs
    };
    this.handlechange = this.handlechange.bind(this);
    this.filtertable = this.filtertable.bind(this)
  }

  handlechange(event) {
    this.setState({ filtervalue: event.target.value }, () => this.filtertable())
  }

  filtertable() {
    this.setState({filtered_FAQ:
        FAQs.filter(item => item.title.toLowerCase().includes(this.state.filtervalue.toLowerCase()) ||
          item.description.toLowerCase().includes(this.state.filtervalue.toLowerCase()))})
  }

  render() {
    return (
      <>
        <Helmet>
          <title>FAQ</title>
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
                        placeholder="Search FAQ"
                        variant="outlined"
                        onChange={this.handlechange}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {this.state.filtered_FAQ.map((item) => (
                  <Grid
                    item
                    key={item.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <FAQcard FAQ={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </>
    )
  }
}

export default FAQ;
