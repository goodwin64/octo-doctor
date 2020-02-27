import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './Header.styled';
import Logo from '../../assets/icons/img-cubx-logo.svg';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

export function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Grid container alignItems={'center'} justify={'space-between'}>
        <Grid container className={classes.logoContainer} alignItems={'center'} justify={'flex-start'}>
          <img src={Logo} alt="Logo" />
          <Box mr={2}/>
          <Typography variant={'h5'}>Doctor</Typography>
        </Grid>

        <Typography variant={'h5'} className={classes.pageTitle}>Patients</Typography>

        <Grid container alignItems={'center'} justify={'space-between'} className={classes.actionButtons}>
          <NotificationsIcon/>
          <Link to={'/health-controller'}><HelpIcon/></Link>
          <Avatar>AW</Avatar>
          <Typography variant={'body1'}>Dr. Andrew</Typography>
          <ExpandMoreIcon/>
        </Grid>
      </Grid>
    </AppBar>
  );
}
