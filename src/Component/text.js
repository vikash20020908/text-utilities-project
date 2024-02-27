import React , {useEffect , useState}from 'react'

function text() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text , setText] = useState ("");

  const handleonchange = (event) => {
    setText(event.target.value);
    }
  const uppercase = ()  => {
    let upcase = text.toUpperCase();
    setText(upcase);
  }
  const lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    alert("this is useffect")
  },[])
  return (
    <div>
      <div className='container'>
        <h2>MY TEXT UTILITIES</h2>
      <textarea   className='form-control' onChange={handleonchange} placeholder='enter text here' value={text} id='mybox' rows={8}/>
      <button className='btn btn-success my-3' onClick={uppercase}>convert to uppercase</button>
      <button className='btn btn-success  mx-2' onClick={lowercase}>convert to lowercase</button>
      </div>
      <div className='container'>
        <h2>text summary</h2>
        <p> {text.split(" ").length} words , {text.length} sentence</p>
        <p>Reading time - {0.008 * text.split(" ").length} Minutes</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default text
