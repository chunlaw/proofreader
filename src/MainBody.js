import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import MainInputBox from './components/MainInputBox'
import MainBtnGroup from './components/MainBtnGroup'
import ResultText from './components/ResultText'

const MainBody = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} md={5}>
        <h3>文本</h3>
        <MainInputBox />
      </Grid>
      <Grid item xs={12} md={2}>
        <MainBtnGroup />
      </Grid>
      <Grid item xs={12} md={5}>
        <h3>校本</h3>
        <ResultText />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: '75vh',
    [theme.breakpoints.down('md')]: {
      marginBottom: '100px',
      height: '100%'
    },
    "& .MuiGrid-item": {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
}))

export default MainBody