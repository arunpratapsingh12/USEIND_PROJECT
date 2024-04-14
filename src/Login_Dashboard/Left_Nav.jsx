import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from 'react-router-dom';
import home_icon from './images/group.png';
import calls_icon from './images/element-3.png';
import settings_icon from './images/settings.png';
import logout_icon from './images/logout.png';



export default function Left_Nav() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders" className='leftnavigation'>
        <List>
          <Link to="/Dashboard_Home" className='leftNav_link first_link '> 
              <img className='' src={home_icon} alt="#" /><p id='in_1' className='active'>Home</p>
          </Link>
          <Link to="#" className='leftNav_link'>
              <img className='' src={calls_icon} alt="#" /><p id='in_1' className=''>My Calls</p>
          </Link>
          <Link to="/Dashboard_Settings" className='leftNav_link'>
              <img className='' src={settings_icon} alt="#" /><p id='in_1' className=''>Settings</p>
          </Link>
          <Link to="#" className='leftNav_link logout_link'>
              <img className='' src={logout_icon} alt="#" /><p id='in_1' className=''>Logout</p>
          </Link>
        </List>
      </nav>
    </Box>
  );
}