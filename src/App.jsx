import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="calculator">
        <h1>Calculator</h1>
        
        <div className="total">
          <p>399,981</p>
        </div>
        
        <div className="buttons">
          <button>
            <p>7</p>
          </button>
          <button>
            <p>8</p>
          </button>
          <button>
            <p>9</p>
          </button>
          <button className="text-button">
            <p>DEL</p>
          </button>
          
            <button>
              <p>4</p>
            </button>
            <button>
              <p>5</p>
            </button>
            <button>
              <p>6</p>
            </button>
            <button>
              <p>+</p>
            </button>
            <button>
              <p>1</p>
            </button>
            <button>
              <p>2</p>
            </button>
            <button>
              <p>3</p>
            </button>
            <button>
              <p>-</p>
            </button>
            <button>
              <p>.</p>
            </button>
            <button>
              <p>0</p>
            </button>
            <button>
              <p>/</p>
            </button>
            <button>
              <p>x</p>
            </button>
            <button className="text-button big-button">
              <p >RESET</p>
            </button>
            <button className="equal-button big-button">
              <p>=</p>
            </button>
        </div>
      </div>
    </>
  )
}

export default App
