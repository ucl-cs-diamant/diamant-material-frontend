import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';

const LeaderboardResults = ({ leaderboard, ...rest }) => {
  const [selectedUserIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleFilter = () => {
    setPage(0);
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Username
                </TableCell>
                <TableCell>
                  MMR
                </TableCell>
                <TableCell>
                  Games Played
                </TableCell>
                <TableCell>
                  League
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboard.slice(page * limit, page * limit + limit).map((item) => (
                <TableRow
                  hover
                  key={item.user_details.user_pk}
                  selected={selectedUserIds.indexOf(item.pk) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {item.user_details.name===null ?
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          Bot#{item.user_details.user_pk}
                        </Typography> :
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                        <a href={item.user}>{item.user_details.name}</a>
                        </Typography>}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {item.mmr}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {item.games_played}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {item.league}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={leaderboard.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        onChange={handleFilter}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

LeaderboardResults.propTypes = {
  leaderboard: PropTypes.array.isRequired
};

export default LeaderboardResults;
