import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleContainer>

        <h1>How to play dice game</h1>

        <div className='para'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted</p>
        </div>





    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`

background-color: #e2202043;
padding: 20px;
max-width: 800px;
margin: 20px auto;

h1{
    font-size: 24px;
    margin-top: 0px;
}

.para{
    line-height: 10px;

    
}





`;