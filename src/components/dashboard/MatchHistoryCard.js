import React from 'react';
import {
  Card,
  CardHeader,
  Divider,
} from '@material-ui/core';
import MatchHistoryResult from '../MatchHistory/MatchHistoryResult';

const MatchHistoryCard = (props) => (
  <Card {...props}>
    <CardHeader title="Match History" />
    <Divider />
    <MatchHistoryResult matches={props.match_history} />
  </Card>
);

export default MatchHistoryCard;
