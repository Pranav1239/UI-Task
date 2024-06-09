"use client"
import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { Timeline, PlayCircle, PeopleAlt, AnnouncementOutlined, AssignmentTurnedIn } from '@mui/icons-material';
import EngamentAllTab from './EngamentAllTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  const renderContent = (index: number) => {
    switch (index) {
      case 0:
        return <EngamentAllTab />;
      case 1:
        return <Typography>Email Content</Typography>;
      case 2:
        return <Typography>Chat Content</Typography>;
      case 3:
        return <Typography>Phone Calls Content</Typography>;
      case 4:
        return <Typography>Notes Content</Typography>;
      case 5:
        return <Typography>Meetings Content</Typography>;
      default:
        return null;
    }
  };

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
          {renderContent(index)}
        </Box>
      )}
    </div>
  );
}

const UserDashboardEngagement = () => {
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
      case 'All':
        return <AssignmentTurnedIn />;
      case 'Email':
        return <Timeline />;
      case 'Chat':
        return <PlayCircle />;
      case 'PhoneCalls':
        return <PeopleAlt />;
      case 'Notes':
        return <AnnouncementOutlined />;
      case 'Meetings':
        return <PlayCircle />;
      default:
        return <AssignmentTurnedIn />;
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
        <Tab icon={renderIcon('All')} iconPosition="start" label="All" />
        <Tab icon={renderIcon('Email')} iconPosition="start" label="Email" />
        <Tab icon={renderIcon('Chat')} iconPosition="start" label="Chat" />
        <Tab icon={renderIcon('PhoneCalls')} iconPosition="start" label="Phone Calls" />
        <Tab icon={renderIcon('Notes')} iconPosition="start" label="Notes" />
        <Tab icon={renderIcon('Meetings')} iconPosition="start" label="Meetings" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <EngamentAllTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Email Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Chat Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Phone Calls Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>Notes Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography>Meetings Content</Typography>
      </TabPanel>
    </Box>
  );
};

export default UserDashboardEngagement;
