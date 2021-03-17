import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import CemendationContext from '../CemendationContext'

const MainInputBox = () => {
  const classes = useStyles()
  const { text, setText } = useContext(CemendationContext)
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
      className={classes.textarea}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  textarea: {
    width: '90%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '400px'
    }
  }
}))

export default MainInputBox