import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';






function App() {

  const [result, setresult] = useState('');
  const [fval, setfval] = useState('');
  const [sign, setsign] = useState('');
  

  const calc = (s) => {
    setsign(s);
    setfval(result);
    setresult('')

  }
  const backspace = () => {
    setresult(result.slice(0,-1));
  }

  const clear1 = () => {
    setresult('');
    
  }

  const sqr=()=>{
    setresult(Math.pow(result,2));


  }
  const squrr=()=>{
    setresult(Math.sqrt(result))
  }
  const squrr1=()=>{
    setresult(1/result)
  }
  const squrr2=()=>{
    setresult(Math.abs(result));
  }
  const squrr3=()=>{
    setresult((fval/100)*result);
  }


  
  const ans = () => {
    if (sign=='+') {

      setresult(parseFloat(fval)+parseFloat(result));
    }
    else if (sign=='-') {
      setresult(parseFloat(fval) - parseFloat(result));

    }
    else if (sign=='*') {
      setresult(parseFloat(fval) * parseFloat(result));

    }
    else if (sign=='/') {
      setresult(parseFloat(fval) / parseFloat(result));

    }
 

 
  }

  return (
    <div classNameName="App">
      <div className='calculator'>
        <Row>
          <Col className='col1'>
            <input type='text' className='border1' value={result} ></input>
          </Col>
          <Col>
          <input type='button' className='button1' value="2/x" onClick={() => { squrr()}} ></input>
          
          <input type='button' className='button1' value="1/x" onClick={() => { squrr1()}} ></input>
          <input type='button' className='button1' value="+/-" onClick={() => { squrr2()}} ></input>
          <input type='button' className='button1' value="%" onClick={() => { squrr3()}} ></input>
          

          
          </Col>

          <Col>
            <input type='button' className='button1' value="x2" onClick={() => { sqr()}} ></input>
            <input type='button' className='button1' value="CE" onClick={() => { clear1()}} ></input>
            <input type='button' className='button1' value="C" onClick={() => { clear1() }} ></input>
            <input type='button' className='button1' value="x" onClick={() => {backspace() }} ></input>




          </Col>

          <Col>
            <input type='button' className='button1' value="7" onClick={() => { setresult(result + 7) }} ></input>
            <input type='button' className='button1' value="8" onClick={() => { setresult(result + 8) }} ></input>
            <input type='button' className='button1' value="9" onClick={() => { setresult(result + 9) }} ></input>
            <input type='button' className='button1' value='*' onClick={() => { calc('*') }}></input>


          </Col>
          <Col>
            <input type='button' className='button1' value="4" onClick={() => { setresult(result + 4) }} ></input>
            <input type='button' className='button1' value="5" onClick={() => { setresult(result + 5) }} ></input>
            <input type='button' className='button1' value="6" onClick={() => { setresult(result + 6) }} ></input>
            <input type='button' className='button1' value='-' onClick={() => { calc('-') }}></input>


          </Col>
          <Col>
            <input type='button' className='button1' value="1" onClick={() => { setresult(result + 1) }} ></input>
            <input type='button' className='button1' value="2" onClick={() => { setresult(result + 2) }} ></input>
            <input type='button' className='button1' value="3" onClick={() => { setresult(result + 3) }} ></input>
            <input type='button' className='button1' value='+' onClick={() => { calc('+')}}></input>

          </Col>
          <Col>
            <input type='button' className='button1' value='/' onClick={() => { calc('/') }}></input>

            <input type='button' className='button1' value="0" onClick={() => { setresult(result + 0) }}></input>
            <input type='button' className='button1' value='.' onClick={() => { setresult(result+'.') }}></input>

            <input type='button' className='button1' value='=' onClick={() => { ans() }}></input>

          </Col>
        </Row>

      </div>


    </div>
  );
}

export default App;
