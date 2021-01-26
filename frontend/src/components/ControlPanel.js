import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Instructions from '../images/Instructions.gif'
import NewEvent from './NewEvent'
import EventContainer from './EventContainer'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F3DFA2",
    display: 'flex',
    height: 1000,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  
}));

export default function ControlPanel(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    fontFamily: "Abril Fatface",
    fontSize: 20
    }

    const style2 = {
    fontFamily: "Duru Sans",
    fontSize: 14
    }

 
  return (
    <div className={classes.root}>
        {console.log(props.name)}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab style={style} label="Life of the Party" {...a11yProps(0)} />
        <Tab style={style2} label="Dashboard" {...a11yProps(1)} />
        <Tab label="Create an Event" href="/event" {...a11yProps(2)} />
        <Tab label="Logout" href="/logout" />
      </Tabs>


      <TabPanel value={value} index={0}>
        <img src= {Instructions}
        width="1000"
        height="750"
        />
      </TabPanel>

      <TabPanel value={value} index={1}>
          <EventContainer /> 
      </TabPanel>

      <TabPanel value={value} index={2}>
            <NewEvent/>       
      </TabPanel>


    </div>
  );
}
