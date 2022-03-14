import React,{useState} from "react";

const Home = () => {
  const [turn, setTurn] = useState("x")
  const [cells, setCells] = useState(Array(9).fill(''))
  const [win, setWin] = useState('')

  const checkWin = (squre)=>{
   let combos ={ 
     across :[
      [0,1,2],
      [3,4,5],
      [6,7,8],
     ],
     down :[
      [0,3,6],
      [1,4,7],
      [2,5,8],
     ],
     dignol:[
      [0,4,8],
      [2,4,6],
     ]
   }

   for(let combo in combos){
     
    combos[combo].forEach(ele=>{
     if(squre[ele[0]] === '' ||squre[ele[1]] === '' ||squre[ele[2]] === '' ){
           // nothing
     }else if(squre[ele[0]] === squre[ele[1]] && squre[ele[1]] === squre[ele[2]]){
      setWin(squre[ele[0]] );
  }})}
  }
  
  const turnHendler = (num) => {
    if(win !== ''){
     return alert(`${win} is win press reset button to play again`);
    }
    if(cells[num] !== ''){
      alert('already Clicked')
      return;
    }
    let squre = [...cells]
    if(turn ==="x" ){
      squre[num] = "x" 
      setTurn("0")
      
    }else{
      setTurn("x") 
      squre[num] = "0" 
    }
 setCells(squre)
 checkWin(squre)
  };
const Cell = ({num}) => {
    return <td onClick={()=>turnHendler(num)}>{cells[num]}</td>;
  };

const reset = ()=>{
  setCells(Array(9).fill(''))
  setWin('');

}


  return (
    <>
      <div className="home">
        <h1>Turn: {turn} </h1>

       {win !== '' ?  <h2> Winer: {win}</h2> : null} 
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        <button className="btn" onClick={reset}> Reset </button>
      </div>
    </>
  );
};

export default Home;
