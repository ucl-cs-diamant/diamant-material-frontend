import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsIdentity from '../components/settings/SettingsIdentity';
import SettingsBotSelection from '../components/settings/SettingsBotSelection';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <SettingsIdentity />
        <br/>
        <SettingsBotSelection />
      </Container>
    </Box>
  </>
);

export default SettingsView;
