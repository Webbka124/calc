import React from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [num3, setNum3] = React.useState(0);
  const [num4, setNum4] = React.useState(0);
  const [num5, setNum5] = React.useState(0);
  console.log();
  
  return (
    
    
    
    
    <div className='container'>
      <h1><span>Калькулятор арбитражника</span></h1>
      <div className='cols3'>
        <div className='col'>
          <div className='_h'>
            <div>
              <img width={18} height={18} src='/img/p1.png' alt='p1'></img>
              <span>Расчет процента от 2-х чисел.</span>
            </div>
          </div>
          <div className='calcBlockCalc1'>
            <div className='calcField'>
              <b>Число 1:</b>
              <input value={num1} onChange={(e) => setNum1(e.target.value)}/>
            </div>
            <div className='calcField'>
              <b>Число 2:</b>
              <input value={num2} onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <div className='calcResult'>
              <b>Результат:</b>
              <p style={num1 > num2 ? {color: 'red'} : {color:'green'}} >{-(num1 > num2 ? ((num2-num1)/num1)*100 : num2 > num1 ? ((num1 - num2)/num1)*100 : num1 === num2 ? 0 : 0).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='_h'>
            <div>
              <img width={18} height={18} src='/img/p2.png' alt='p2'></img>
              <span>Увеличить число на процент</span>
            </div>
          </div>
          <div className='calcBlockCalc2'>
            <div className='calcField'>
              <b>Число:</b>
              <input value={num3} onChange={(e) => setNum3(e.target.value)}/>
            </div>
            <div className='calcField'>
              <b>Увеличить на %:</b>
              <input value={num4} onChange={(e) => setNum4(e.target.value)}/>
            </div>
            <div className='calcResult'>
              <b>Результат:</b>
              <p style={{color:'green'}}>{num3 *(1 + (num4/ 100)).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='_h'>
            <div>
              <img width={18} height={18} src='/img/p3.png' alt='p3'></img>
              <span>Процент от числа</span>
            </div>
          </div>


          <div className='calcBlockCalc3'>
            <div className='plusBlock'>
              <div style={{color: 'green'}}>
              <p className='cvet'><i>+10%</i>
              <b>{(num5+(num5/100)*10)}</b></p>
              <p>
                <i>+9%</i>
                <b>{(num5+(num5/100)*9)}</b></p>
                <p className='cvet'>
                  <i>+8%</i>
                  <b>{(num5+(num5/100)*8)}</b></p>
                  <p>
                <i>+7%</i>
                <b>{(num5+(num5/100)*7)}</b></p>
                <p className='cvet'>
                  <i>+6%</i>
                  <b>{(num5+(num5/100)*6)}</b></p>
                  <p>
                <i>+5%</i>
                <b>{(num5+(num5/100)*5)}</b></p>
                <p className='cvet'>
                  <i>+4%</i>
                  <b>{(num5+(num5/100)*4)}</b></p>
                  <p>
                <i>+3%</i>
                <b>{(num5+(num5/100)*3)}</b></p>
                <p className='cvet'>
                  <i>+2%</i>
                  <b>{(num5+(num5/100)*2)}</b></p>
                  <p>
                <i>+1%</i>
                <b>{(num5+(num5/100))}</b></p>
                
                  </div>

              
            
            </div>
            
            <div className='calcField'>
              <input value={num5} onChange={(e) => setNum5(parseInt(e.target.value))}/>
            </div>
            
            <div className='minusBlock'>
            <div style={{color: 'red'}}>
              <p className='cvet'>
            <i>-1%</i>
              <b>{(num5-(num5/100))}</b></p>
              <p>
                <i>-2%</i>
                <b>{(num5-(num5/100)*2)}</b></p>
                <p className='cvet'>
                  <i>-3%</i>
                  <b>{(num5-(num5/100)*3)}</b></p>
                  <p>
                <i>-4%</i>
                <b>{(num5-(num5/100)*4)}</b></p>
                <p className='cvet'>
                  <i>-5%</i>
                  <b>{(num5-(num5/100)*5)}</b></p>
                  <p>
                <i>-6%</i>
                <b>{(num5-(num5/100)*6)}</b></p>
                <p className='cvet'>
                  <i>-7%</i>
                  <b>{(num5-(num5/100)*7).toFixed(2)}</b></p>
                  <p>
                <i>-8%</i>
                <b>{(num5-(num5/100)*8)}</b></p>
                <p className='cvet'>
                  <i>-9%</i>
                  <b>{(num5-(num5/100)*9)}</b></p>
                  <p>
                <i>-10%</i>
                <b>{(num5-(num5/100)*10)}</b></p>
              </div>
              
            </div>
          </div>
        </div>

        
          
      </div>

    </div>
      
    
  );
}

export default App;
