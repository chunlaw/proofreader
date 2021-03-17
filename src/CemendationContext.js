import React, {useState, useEffect} from "react"

const CemendationContext = React.createContext()

export const CemendationContextProvider = (props) => {
  const [dictionary, setDictionary] = useState({version: "hk", dict: []})
  const [text, setText] = useState("")
  const [rawDict, setRawDict] = useState("")
  const [result, setResult] = useState([])
  const [active, setActive] = useState(-1)

  useEffect(() => {
    if ( dictionary.dict.length === 0 )
      setVersion(dictionary.version)
  }, [dictionary.version])

  const setDict = ( rawDict, version ) => {
    setRawDict(rawDict)
    const lines = rawDict.split("\n")
    const dict = []
    lines.forEach ( line => {
      if ( line === '' ) return
      const [find, replace, remark] = line.split('|')
      dict.push( {find, replace, remark} )
    })
    setDictionary({dict, version})
  }

  const setVersion = ( version ) => {
    if ( version !== 'hk' ) version = "hk" // TODO: Add other vocab
    fetch(version+"-list.txt")
      .then(res => res.text())
      .then(
        (result) => {
          setDict(result, version)
        }
      )
  }

  return (
    <CemendationContext.Provider value={
      {dictionary, setVersion, text, setText, result, setResult, active, setActive, rawDict, setDict}
    }>
      {props.children}
    </CemendationContext.Provider>
  )
}

export default CemendationContext
