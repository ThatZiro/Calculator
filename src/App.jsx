import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="calculator">
        <h1>calc</h1>
        
        <div className="total">
          <p>399,981</p>
        </div>
        
        <div>
          <div className="row">
            <button>
              <p>7</p>
            </button>
            <button>
              <p>8</p>
            </button>
            <button>
              <p>9</p>
            </button>
            <button>
              <p className="text-button">DEL</p>
            </button>
          </div>
          
          <div className="row">
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
          </div>
          
          <div className="row">
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
          </div>
          
          <div className="row">
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
          </div>
          
          <div className="row">
            <button>
              <p className="text-button">RESET</p>
            </button>
            <button>
              <p>=</p>
            </button>
          </div>
        </div>
        
        <div className="themes">
          <h2>THEME</h2>
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className="slider">
            <div className="selector"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
