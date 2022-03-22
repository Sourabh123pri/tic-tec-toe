import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [turn, setTurn] = useState("x")
  const [cells, setCells] = useState(Array(9).fill(''))
  const [win, setWin] = useState('')
  let [countClick, setCountClick] = useState(0)

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
      toast.success(`${squre[ele[0]]} won`)
  }})}



  }
  
  const turnHendler = (num) => {
    if(win !== ''){
     return toast.success(`${win} is win  \n press reset button to play agian`);
    }
    if(cells[num] !== ''){
      toast.warn('Already Clicked')
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
 checkWin(squre);
 const ans = cells.every(ele=>(ele !== ''))
 if(!ans) setCountClick(countClick+1)

if(countClick === 8) {
  if(win === ""){
    toast.warn("Draw match") 
  }  
}

  };
  const reset = ()=>{
    setCells(Array(9).fill(''))
    setWin('');
    setCountClick(0)
  
  }

const Cell = ({num,border}) => {
    return <td className={border}onClick={()=>turnHendler(num)}>{cells[num]}</td>;
  };




  return (
    <>
      <div className="home">
        <ToastContainer position="top-center" />
        <h1>Turn: {turn} </h1>

       {win !== '' ?  <h2> Winer: {win}</h2> : null} 
        <table>
          <tbody>
            <tr>
              <Cell border={"bt_0 bl_0"} num={0} />
              <Cell border={"bt_0"} num={1} />
              <Cell border={"bt_0 br_0"} num={2} />
            </tr>
            <tr>
              <Cell border={"bl_0"} num={3} />
              <Cell  num={4} />
              <Cell border={"br_0"} num={5} />
            </tr>
            <tr>
              <Cell border={"bb_0 bl_0"} num={6} />
              <Cell border={"bb_0"} num={7} />
              <Cell border={"bb_0 br_0"} num={8} />
            </tr>
          </tbody>
        </table>
        <button className="btn" onClick={reset}> Reset </button>
      </div>
    </>
  );
};

export default Home;
