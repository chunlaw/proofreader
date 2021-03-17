import React, { useState, useContext } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  Typography
} from '@material-ui/core'
import CemendationContext from './CemendationContext'
import DictDrawerContent from './components/DictDrawerContent'

const Header = () => {
  const classes = useStyles()
  const { dictionary: { version }, setVersion } = useContext(CemendationContext)
  const [open, setOpen] = useState(false)
  const toggleDrawer = ( open ) => ( event ) => {
    if ( event && event.type === 'keydown' && ( event.key === 'Tab' || event.key === 'Shift' )) {
      return
    }
    setOpen(open)
  }

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          校讎足下
        </Typography>
        <RegionTabs onChange={(e, v) => setVersion(v)} value={version}>
          <RegionTab value='hk' label='港' />
          <RegionTab value='tw' label='台' />
          <RegionTab value='self' label='自訂' onClick={toggleDrawer(true)} />
        </RegionTabs>
        <SwipeableDrawer
          anchor='right'
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <DictDrawerContent/>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#eee',
    color: 'black',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const RegionTabs = withStyles( (theme) => ({
  root: {
    borderBottom: 'none',
    minHeight: 24
  },
  indicator: {
    backgroundColor: 'transparent'
  }
}))(Tabs)

const RegionTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 36,
    fontWeight: 900,
    marginRight: theme.spacing(0),
    fontSize: '15px',
    opacity: 1,
    padding: '6px 6px',
  },
  selected:{
    '& > .MuiTab-wrapper':{
      color: '#3B3C45',
      backgroundColor: '#dedede'
    }
  },
  wrapper: {
    color: '#aaa',
    borderRadius: '30px',
    padding: '2px 10px 0px 10px'
  },
}))((props) => <Tab disableRipple {...props} />);

export default Header