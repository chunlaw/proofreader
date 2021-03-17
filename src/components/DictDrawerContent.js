import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  Container,
  LinearProgress
} from '@material-ui/core'
import { useFilePicker } from 'use-file-picker'
import CemendationContext from '../CemendationContext'

const DictDrawerContent = () => {
  const classes = useStyles()
  const {rawDict, setDict} = useContext (CemendationContext)
  const [fileContent, errors, openFileSelector, loading] = useFilePicker({
    accept: ['.txt'],
    multiple: false
  })

  useEffect (() => {
    if ( fileContent[0] ) {
      setDict(fileContent[0].content, 'self')
    }
  }, [fileContent])

  return (
    <Container className={classes.drawerContainer}>
      <h3>字表：</h3>
      <div>
        {loading ? <LinearProgress /> : null}
        <textarea
          value={rawDict}
          onChange={e => setDict(e.target.value, 'self')}
          className={classes.textarea}
          placeholder={"用法：\n一行行輸入要編校的詞語、置換成的詞語及簡單備考\n分別以「|」( Shift + \\ ) 分隔\n\n例子：\n滄海一栗|滄海一粟|大海裏的一粒穀子。比喻非常渺小"}
        />
      </div>
      <Button variant='contained' onClick={openFileSelector}>上傳檔案</Button>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  drawerContainer: {
    minWidth: '200px',
    width: '40vw',
    padding: '0 5%'
  },
  textarea: {
    width: '99%',
    height: '80vh'
  }
}))

export default DictDrawerContent