import React, { useState } from 'react'
import styled from 'styled-components'


const RoleDice = ({currentDice , roleDice}) => {
  



  return (
    <DiceContainer>

      <div className='Images'>
        <img onClick={roleDice} src={`public/images/dice${currentDice}.png`} alt="" />
        <p>Click On Dice To Roll</p>
      </div>








    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`

display: flex;
justify-content: center;
  .Images{
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: larger;

  }
  img{
    width: 300px;
    height: 300px;
    cursor: pointer;

  }


`;