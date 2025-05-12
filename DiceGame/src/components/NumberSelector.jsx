import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({error, setError, selectedNumber,setSelectedNumber}) => {

  const arrNumber = [1,2,3,4,5,6];

  const numberSelectorHandler = (item) => {
    setSelectedNumber(item);
    setError("")
  }





  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='boxes'>
        {arrNumber.map((item,index) => (
          <Box
          isSelected={item == selectedNumber}
          key={index} 
          onClick={() => numberSelectorHandler(item)}
          >{item}</Box>
        ))}
      </div>

      <p>Select The Number</p>

        




    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
.boxes{
  display: flex;
  gap: 40px;
}
p{
  font-size: larger;
  font-weight: 600;
  display: flex;
  justify-content: end;

  
}
.error{
  color: red;
}

`;

const Box = styled.div`

    height: 72px;
    width: 72px;
    border: 1px solid black;

    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};

`;