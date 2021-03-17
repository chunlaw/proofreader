import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import CemendationContext from '../CemendationContext'
import classNames from 'classnames'

const ResultText = () => {
  const { result, active, setActive } = useContext( CemendationContext )
  const classes = useStyles()
  const handleClick = (idx) => {
    if ( result[idx].highlighted === null ) return
    else {
      setActive(idx === active ? -1 : idx)
    }
  }

  return (
    <div className={classes.resultContainer}>
      {
        result.map((cluster, idx) => {
          if ( cluster.value === "\n" ) return <br />
          return (
            <span
              key={"span-"+idx}
              className={classNames(
                cluster.highlighted !== null ? classes.highlighted : null,
                active === idx ? classes.active : null
              )}
              onClick={() => handleClick(idx)}
            >
              {cluster.value}
            </span>
          )
        })
      }
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  resultContainer: {
    border: '1px solid black',
    width: '90%',
    height: '100%',
    textAlign: 'left',
    padding: '2px',
    font: '400 13.3333px Arial',
    '& span': {
      fontFamily: 'monospace'
    },
    wordBreak: 'break-word',
    appearance: 'textarea',
    [theme.breakpoints.down('md')]: {
      height: '400px'
    }
  },
  highlighted: {
    backgroundColor: 'yellow',
    cursor: 'pointer'
  },
  active: {
    backgroundColor: 'pink !important'
  }
}))

export default ResultText