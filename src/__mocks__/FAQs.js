import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '24/10/2021',
    description: 'Our support for any issues with the site or game is handled through our discord found here: PLACEHOLDER.',
    title: 'Where can I get support?'
  },
  {
    id: uuid(),
    createdAt: '24/10/2021',
    description: 'Our current pool of players are drawn from PLACEHOLDER.',
    title: 'Who is competing?'
  },
  {
    id: uuid(),
    createdAt: '24/10/2021',
    description: 'Ranked seasons are the frame of time between rank resets, here we reset player ranks to normalise and renew fresh competition.',
    title: 'What are ranked seasons?'
  },
  {
    id: uuid(),
    createdAt: '24/10/2021',
    description: 'PLACEHOLDER.',
    title: 'How often do Rank resets happen?'
  },
  {
    id: uuid(),
    createdAt: '24/10/2021',
    description: 'MMR or Match Making rating, is the current systems estimate of your skill. This determines what division you are in, who you are matched against, and how high you are on the leaderboard.',
    title: 'What is MMR/ELO?'
  },
  {
    id: uuid(),
    createdAt: '24/10/2021',
    description: 'Your display name can be found in the settings menu, this determines what name is shown on the leaderboards while hiding your identity will simply show your Bot number.',
    title: 'What is my display name?'
  },
  {
    id: uuid(),
    createdAt: '24/10/2021',
    description: 'Divisions are calculated weekly based on where you currently are in the leaderboards, there are 4 divsions in total to signify which 25th percentile you are in.',
    title: 'How are divisions calculated?'
  }
];
