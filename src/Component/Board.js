import React from "react"
import { useState } from "react";
import Square from './Square';
import "./Style/Board.css"
function Board(){
    const [state,setState]=useState(Array(9).fill(null));
    const[isxTurn,setIsxTurn]=useState(true);

    const handclick=(index)=>{
        
        const copystate=[...state]
        copystate[index]=isxTurn?'X':'O';
        setState(copystate)
        setIsxTurn(!isxTurn)
    }
    const checkwinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a]!== null && state[a]===state[b]&&state[a]===state[c]){
                return state[a];
            }
            
        }
        return false
        
    }
    const isWinner=checkwinner()   
    return(
        <div className="container">
        <div className='board-container'>
            {isWinner?<h1>{isWinner} IS WINNER </h1>:<>
            <div className="board-row">
                <Square onClick ={()=>handclick(0)} value={state[0]}/>
                <Square onClick ={()=>handclick(1)} value={state[1]} />
                <Square  onClick ={()=>handclick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
            <Square onClick ={ ()=>handclick(3)} value={state[3]}/>
            <Square onClick ={ ()=>handclick(4)} value={state[4]}/>
            <Square onClick ={ ()=>handclick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
            <Square onClick ={ ()=>handclick(6)} value={state[6]}/>
            <Square onClick ={ ()=>handclick(7)} value={state[7]}/>
            <Square onClick ={ ()=>handclick(8)} value={state[8]}/>
            </div>
            </>}
            
            
        </div>
        </div>
        
    )
}

export default Board;