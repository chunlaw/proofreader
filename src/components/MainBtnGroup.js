import React, { useState, useContext } from 'react'
import {
  IconButton,
  Snackbar,
  Tooltip
} from '@material-ui/core'
import {
  Create as CreateIcon,
  FileCopy as FileCopyIcon
} from '@material-ui/icons'
import CemendationContext from '../CemendationContext'

const MainBtnGroup = () => {
  const { dictionary: {dict}, text, result, setResult } = useContext(CemendationContext)
  const convert = () => {
    const texts = [];

    [...text].forEach ( value => {
      texts.push({
        highlighted: null,
        value: value
      })
    })

    dict.forEach((checkPair, pairIdx) => {
      for (let idx = 0; idx < texts.length; ++idx) {
        let find = true
        for ( let j = 0; find && j < checkPair.find.length; ++j )
          find = find && texts[idx+j] != null && checkPair.find[j] === texts[idx+j].value
        if ( find ) {
          texts.splice(idx, checkPair.find.length)
          for ( let j = 0; j < checkPair.replace.length; ++j )
            texts.splice(idx+j, 0, {
              highlighted: pairIdx,
              value: checkPair.replace[j]
            })
        }
      }
    })

    let clusters = []
    let tmpCluster = JSON.parse(JSON.stringify(texts[0] || {}))
    texts.slice(1).forEach( c => {
      if ( c.value === "\n" ) {
        clusters.push(tmpCluster)
        clusters.push({
          value: "\n",
          highlighted: null
        })
        tmpCluster = JSON.parse(JSON.stringify({}))
      } else if ( tmpCluster.highlighted === c.highlighted )
          tmpCluster.value += c.value
      else {
        clusters.push(tmpCluster)
        tmpCluster = JSON.parse(JSON.stringify(c))
      }
    })
    clusters.push(tmpCluster)

    setResult(JSON.parse(JSON.stringify(clusters)))
  }

  const [open, setOpen] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.map(v => v.value).join(''))
    setOpen(true)
  }

  return (
    <div>
      <Tooltip title="校對" aria-label="校對">
        <IconButton aria-label='校' onClick={convert}><CreateIcon /></IconButton>
      </Tooltip>
      <Tooltip title="複製校本" aria-label="複製校本">
        <IconButton aria-label='複製校本' onClick={copyToClipboard}><FileCopyIcon /></IconButton>
      </Tooltip>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={e => setOpen(false)}
        message="Copied"
      />
    </div>
  )
}

export default MainBtnGroup