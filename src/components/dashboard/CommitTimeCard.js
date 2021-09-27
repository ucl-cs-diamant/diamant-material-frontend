import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const CommitTimeCard = (props) => (
  <Card sx={{ height: '100%' }}
        {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Latest Commit Time
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {props.commit_time}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    alignItems: 'center',*/}
      {/*    display: 'flex',*/}
      {/*    pt: 2*/}
      {/*  }}*/}
      {/*>*/}
        {/*<ArrowUpwardIcon sx={{ color: green[900] }} />*/}
        {/*<Typography*/}
        {/*  variant="body2"*/}
        {/*  sx={{*/}
        {/*    color: green[900],*/}
        {/*    mr: 1*/}
        {/*  }}*/}
        {/*>*/}
        {/*  16%*/}
        {/*</Typography>*/}
        {/*<Typography*/}
        {/*  color="textSecondary"*/}
        {/*  variant="caption"*/}
        {/*>*/}
        {/*  Since last month*/}
        {/*</Typography>*/}
      {/*</Box>*/}
    </CardContent>
  </Card>
);

export default CommitTimeCard;
