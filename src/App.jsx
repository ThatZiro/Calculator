import './App.css'
import {useState} from 'react';

function App() {
  const [total, setTotal] = useState("0");
  const [equation, setEquation] = useState("");

  const updateEquation = (value) => {
    const operations = ["+", "-", ".", "/", "x"]
    let currentEq = equation.split("");
    
    
    switch(value) {
      case "DEL":
        setEquation(equation.slice(0, -1));
        if(equation === "") setTotal("0");
        setTotal("0");
        break;
      case "RESET":
        setEquation("");
        setTotal("0");
        break;
      case "=":
        calculate();
        break;
      case "+":
      case "-":
      case ".":
      case "/":
      case "x":
        if(total !== "0" && !equation){
          console.log("Test");
          if (operations.includes(value)) {
            console.log(total);
            console.log(value);
            setEquation(total + value);
          }
          
          setTotal("0")
        } else{
          console.log(currentEq);
          if (!operations.includes(currentEq[currentEq.length - 1])) {
            setEquation(equation + value);
          }
        }
        break;
      default:
        setEquation(equation + value);
        break;
    }
  }
  
  const calculate = () => {
    try{
      const cleanEquation = equation.replace(/x/g, '*');
      const result = eval(cleanEquation);
      setTotal(result);
      setEquation("");
    } catch (err){
      setTotal("Invalid Equation")
    }
  }
  return (
    <>
      <div className="calculator">
        <h1>Calculator</h1>
        
        <div className="total">
          <p>{equation.length === 0? total : equation}</p>
        </div>
        
        <div className="buttons">
          <button onClick={() => updateEquation(7)}>
            <p>7</p>
          </button>
          <button onClick={() => updateEquation(8)}>
            <p>8</p>
          </button>
          <button onClick={() => updateEquation(9)}>
            <p>9</p>
          </button>
          <button className="text-button" onClick={() => updateEquation("DEL")}>
            <p>DEL</p>
          </button>
          
            <button onClick={() => updateEquation(4)}>
              <p>4</p>
            </button>
            <button onClick={() => updateEquation(5)}>
              <p>5</p>
            </button>
            <button onClick={() => updateEquation(6)}>
              <p>6</p>
            </button>
            <button onClick={() => updateEquation("+")}>
              <p>+</p>
            </button>
            <button onClick={() => updateEquation(1)}>
              <p>1</p>
            </button>
            <button onClick={() => updateEquation(2)}>
              <p>2</p>
            </button>
            <button onClick={() => updateEquation(3)}>
              <p>3</p>
            </button>
            <button onClick={() => updateEquation("-")}>
              <p>-</p>
            </button>
            <button onClick={() => updateEquation(".")}>
              <p>.</p>
            </button>
            <button onClick={() => updateEquation(0)}>
              <p>0</p>
            </button>
            <button onClick={() => updateEquation("/")}>
              <p>/</p>
            </button>
            <button onClick={() => updateEquation("x")}>
              <p>x</p>
            </button>
            <button className="text-button big-button" onClick={() => updateEquation("RESET")}>
              <p >RESET</p>
            </button>
            <button className="equal-button big-button" onClick={() => updateEquation("=")}>
              <p>=</p>
            </button>
        </div>
      </div>
    </>
  )
}

export default App
