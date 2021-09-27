import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const GamesPlayedCard = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            Games Played
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {props.games_played}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      {/*<Box sx={{ pt: 3 }}>*/}
      {/*  <LinearProgress*/}
      {/*    value={75.5}*/}
      {/*    variant="determinate"*/}
      {/*  />*/}
      {/*</Box>*/}
    </CardContent>
  </Card>
);

export default GamesPlayedCard;
