import React, { Fragment , useState } from 'react'
import './App.css'
import randomstring from 'randomstring'

function App() {
  const [text, settext] = useState('')
  const [money, setmoney] = useState('')
  const [Amount, setAmount] = useState('260.01')
  const [Expense, setExpense] = useState('240.01')
  const [Income, setIncome] = useState('500.01')
  const [data, setdata] = useState([
  {
    id:1,
    name:'Cash',
    value:'+500'
  },
  {
    id:2,
    name:'Book',
    value:'-40'
  },
  {
    id:3,
    name:'Camera',
    value:'-200'
  }
])

  const handlechange=(e)=>{
    if(e.target.name==='text'){
      settext(e.target.value)
    }
    else{
      setmoney(e.target.value)
    }
    
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(money[0]==='-' || money[0]==='+'){
      if(text!==''){
        let temp={
          id:randomstring.generate({length:12,charset:'numeric'}),
          name:text,
          value:money
        }
        let counter=[...data]
        counter.push(temp)
        setdata(counter)
        if(money[0]==='+'){
          let money1 = parseFloat(money)
          let income1 = parseFloat(Income)
          let amount1 = parseFloat(Amount)
          income1 += money1
          amount1 += money1
          setIncome(income1.toString())
          setAmount(amount1.toString())
        }
        else{
          let money1 = parseFloat(money)
          let expense1 = parseFloat(Expense)
          let amount1 = parseFloat(Amount)
          expense1 -= money1
          amount1 += money1
          setExpense(expense1.toString())
          setAmount(amount1.toString()) 
        }


      }
      else{
        alert('text must not be empty')
      }
    }
    else{
      alert('amount should start from - or +')
    }
  }

  let arr = data.map(element=>{
    if(element.value[0]==='+'){
    return(<div key={element.id} className='positive'><h4 style={{marginTop:'0.5em'}}>{element.name}</h4><h4 style={{marginTop:'0.5em'}}>{element.value}</h4></div>)
    }
    else{
      return(<div key={element.id} className='negative'><h4 style={{marginTop:'0.5em'}}>{element.name}</h4><h4 style={{marginTop:'0.5em'}}>{element.value}</h4></div>)

    }
  })


  return (
    <Fragment>
      <center><h2>Expense Tracker</h2></center>
      <div className='balance'>
      <h4>Your Balance</h4>
      <h2>${Amount}</h2>
      </div>
      <div className='box_container'>
        <div className='box'><br/>
          <center><h3>INCOME</h3>
          <h2 style={{color:'green'}}>${Income}</h2></center>
          </div>
          <div style={{border:'1px solid #d1d1d1',height:'2em',marginTop:'1.5em', borderRadius:'1em'}}>
            </div>
          <div className='box'><br/>
            <center><h3>EXPENSE</h3>
            <h2 style={{color:'red'}}>${Expense}</h2></center>
            </div>
          </div>
          {/* end */}
          <h3 style={{marginLeft:'28em'}}>History</h3>
          <div style={{marginLeft:'33em'}}>
            {arr}
            </div>
            {/* end */}
            <h3 style={{marginLeft:'28em'}}>Add New Transaction</h3>
            <form onSubmit={handlesubmit}>
            <h4 style={{marginLeft:'32.8em',marginBottom:'0.4em'}}>Text</h4>
            <input type='text' placeholder='Enter Text...'  className='input1' name='text' value={text} onChange={handlechange}/>
            <h4 style={{marginLeft:'32.8em',lineHeight:'0.1px',marginBottom:'0.2em'}}>Amount</h4>
            <h5 style={{marginLeft:'39.5em',lineHeight:'0.1px',marginBottom:'1.4em'}}>(negative-expense,positive-income)</h5>
            <input type='text' placeholder='Enter Amount...' className='input1' name='money' value={money} onChange={handlechange}/><br/>
            <input type='submit' value='Add Transaction' className='btn'/>
            </form>
            

            


      
      
    </Fragment>
  )
}

export default App
