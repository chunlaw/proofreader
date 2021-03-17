import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ForwardIcon from '@material-ui/icons/Forward'
import CemendationContext from './CemendationContext'
import CookieBanner from 'react-cookie-banner'

const Footer = () => {
  const { result, setResult, active, setActive, dictionary: {dict} } = useContext(CemendationContext)
  const classes = useStyles()
  const {find, replace, remark} = active === -1 ? {find: '', replace: ''} : dict[result[active].highlighted]
  const choose = (txt) => {
    setResult( result.map((v, idx) => ({
      value: active === idx ? txt : v.value,
      highlighted: v.highlighted
    })))
    setActive(-1)
  }

  return (
    <div className={classes.root}>
      { active === -1 ? <></> : (
        <div className={classes.showcase}>
          <Button variant="outlined" onClick={e => choose(find)}>{find}</Button>
          <div className={classes.changeIcon}><ForwardIcon /></div>
          <Button variant="outlined" onClick={e => choose(replace)}>{replace}</Button>
        </div>
      )}
      <div className={classes.remark}>{
        active === -1 ? <></> : (remark)
      }</div>
      <div style={{position: 'fixed', bottom: 0}}>
        <CookieBanner
          styles={cookieBannerStyles}
          message="為了提升服務質素，我們會使用Cookie或其他類似技術來了解我們的流量和提升㤦用者體驗。"
          buttonMessage="我明白"
          dismissOnScroll={false}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    height: '15vh',
    width: '100%',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  remark: {
    color: '#444',
    marginTop: '10px',
    fontSize: '0.8em'
  },
  showcase: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '1.5em'
  },
  changeIcon: {
    margin: '0 40px',
    padding: '6px 8px'
  }
}))

export default Footer


const cookieBannerStyles = {
  banner: {
    fontFamily: 'Source Sans Pro',
    height: 57,
    background: 'rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 50% no-repeat',
    backgroundSize: '30px 30px',
    backgroundColor: '',
    fontSize: '15px',
    fontWeight: 600
  },
  button: {
    border: '1px solid white',
    borderRadius: 4,
    width: 66,
    height: 32,
    lineHeight: '32px',
    background: 'transparent',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    opacity: 1,
    right: 20,
    marginTop: -18
  },
  message: {
    display: 'block',
    padding: '9px 9px',
    lineHeight: 1.3,
    textAlign: 'left',
    width: '70%',
    fontSize: '0.8em',
    color: 'white'
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold'
  },
}