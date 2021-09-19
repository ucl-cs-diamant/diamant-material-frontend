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

const MatchHistoryResult = ({ matches, ...rest }) => {
  const [selectedMatches] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Match
                </TableCell>
                <TableCell>
                  Players
                </TableCell>
                <TableCell>
                  Winners
                </TableCell>
                <TableCell>
                  Time Started
                </TableCell>
                <TableCell>
                  Time Finished
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {matches.slice(page * limit, page * limit + limit).map((match) => (
                <TableRow
                  hover
                  key={match.match_id}
                  selected={selectedMatches.indexOf(match.match_id) !== -1}
                >
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
                        {match.url}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {match.players}
                  </TableCell>
                  <TableCell>
                    {match.winners}
                  </TableCell>
                  <TableCell>
                    {Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                    }).format(new Date(match.time_started))}
                  </TableCell>
                  <TableCell>
                    {Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                    }).format(new Date(match.time_finished))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={matches.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

MatchHistoryResult.propTypes = {
  matches: PropTypes.array.isRequired
};

export default MatchHistoryResult;
