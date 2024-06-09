"use client"
import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { Timeline, PlayCircle, PeopleAlt, AnnouncementOutlined, AssignmentTurnedIn } from '@mui/icons-material';
import OverviewTab from './OverviewTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const TabUI = () => {
  const [value, setValue] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'Timeline':
        return <Timeline />;
      case 'Plays':
        return <PlayCircle />;
      case 'Customer Journey':
        return <PeopleAlt />;
      case 'Usage':
        return <AnnouncementOutlined />;
      case 'Overview':
        return <AssignmentTurnedIn />;
      default:
        return '';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isSmallScreen ? 'scrollable' : 'standard'}
        scrollButtons={isSmallScreen ? 'auto' : undefined}
        aria-label="tab UI"
      >
        <Tab icon={renderIcon('Overview')} iconPosition="start" label="Overview" />
        <Tab icon={renderIcon('Usage')} iconPosition="start" label="Usage" />
        <Tab icon={renderIcon('Customer Journey')} iconPosition="start" label="Customer Journey" />
        <Tab icon={renderIcon('Plays')} iconPosition="start" label="Plays" />
        <Tab icon={renderIcon('Timeline')} iconPosition="start" label="Timeline" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <OverviewTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Usage Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Customer Journey Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Plays Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>Timeline Content</Typography>
      </TabPanel>
    </Box>
  );
};

export default TabUI;
