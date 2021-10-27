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

  // noinspection HtmlUnknownTarget
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
          spacing={1}
        >
        <Container maxWidth="xl">
          <Grid
            item
            >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: "center"
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
                variant="h3"
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

              <br/>

              <Typography
                color="textPrimary"
                variant="body1"
              >
                Your objective will be to take your default bot and improve it so that it be able to compete against other bots and win to climb the rankings, you are given free reign to use any methods
                within the rules of the game to make the most intelligent bot
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
                variant="h3"
              >
                Gameplay
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                LINKS TO VIDEOS
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
                  PLACEHOLDER
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
                  variant="h3"
                >
                  Rules
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  4 - 8 players will compete in a single match to collect the store the most gems in their chest
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
                <br/>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Cards can have 3 different types:
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  - Treasure: Awards gems to each players pocket equally, with the remainder staying on the card
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  - Relic: A single relic worth 5 or 10 gems, cannot be collected normally
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  - Traps: There are multiple types of traps, if two of the same trap is pulled within a single round or cave, all players are kicked out and they lose all their gems on hand
                </Typography>
                <br/>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  If a trap is pulled and the players survive, players will now decide whether they will exit the cave to bank and pick up loot left behind, or to continue on and risk another card pull
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
                  variant="h3"
                >
                  LINKS
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  LINKS TO BOT SAMPLES
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  LINKS TO DISCORD
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  <Link href="/FAQ" color="inherit">
                    FAQ
                  </Link>
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
                      PLACEHOLDER
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
