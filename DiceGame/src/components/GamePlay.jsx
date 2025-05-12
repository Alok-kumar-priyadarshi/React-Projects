import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button , OutlineButton} from '../styled/button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [currentDice,setCurrentDice] = useState(1);
  const [selectedNumber,setSelectedNumber] = useState();
  const [error,setError] = useState("");
  const [showRules , setShowRules] = useState(false);


  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random()*(max-min) + min);
  };

  const roleDice = () => {

    if(!selectedNumber){
      setError("You have not selected any number")
      
      return;
    } 
    



    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);


    if(randomNumber == selectedNumber){
      setScore((prev) => prev + randomNumber );
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined)

  };

  const resetScore = () => {
    setScore(0);

  }


  return (
    <GameplayContainer>
      <div className='header'>


        <TotalScore score={score} setScore={setScore} />
        <NumberSelector
         selectedNumber={selectedNumber}
         error={error}
         setError={setError}
         setSelectedNumber={setSelectedNumber}

         />
      </div>

      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Now</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
        {showRules &&  <Rules />}
        
      </div>


    </GameplayContainer>
  )
}

export default GamePlay

const GameplayContainer = styled.div`

.header{

  display: flex;
  justify-content: space-between;
  max-width: 1180px;
  margin: 20px auto;
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
}

`;