import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Card, CardContent,
  Container, Divider,
  Grid,
  Link,
  Typography
} from '@material-ui/core';
const Landing = () => {

  return (
    <>
      <Helmet>
        <title>Diamant</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Grid
          container
          spacing={3}
        >
        <Container maxWidth="lg">
          <Grid
            item
            >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3
                }}
              >
              </Box>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h4"
              >
                Diamant
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                Diamant is a multiplayer card game where players take on the role of adventurers looking for treasure in a diamond mine.
                Players search for diamonds while trying to avoid various hazards such as spiders and snakes.
                Fearful players can run out of the cave, while daring players can choose to venture on, push their luck, and risk losing the treasure they have accumulated.
                After five rounds, the player with the most treasure is the winner.
              </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Box sx={{ p: 2 }}>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between' }}
              >
                <Grid
                  item
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Typography
                    color="textSecondary"
                    display="inline"
                    sx={{ pl: 1 }}
                    variant="body2"
                  >
                    <Link href="https://www.ultraboardgames.com/diamant/game-rules.php" variant="body1"> Wikipedia</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>

            <br/>

          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3
                }}
              >
              </Box>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h4"
              >
                Rules
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                4 - 8 players will compete in a single match to collect the most gems
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                A single match consists of 5 rounds where players will explore caves (expeditions) in a turn based fashion
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                Each turn, a card will be pulled from the deck and an event will occur based on the card
              </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Box sx={{ p: 2 }}>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between' }}
              >
                <Grid
                  item
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  A full explanation of the rules can be found <Link href="https://www.ultraboardgames.com/diamant/game-rules.php" variant="body1"> here</Link>
                </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
          </Grid>
        </Container>
      </Grid>
    </Box>
    </>
  );
};

export default Landing;
