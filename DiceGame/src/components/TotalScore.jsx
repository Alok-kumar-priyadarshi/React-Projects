import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score,setScore}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
        
    </ScoreContainer>

  )
}

export default TotalScore

const ScoreContainer = styled.div`

text-align: center;
max-width: 200px;

h1{
    font-size: 50px;
    line-height: 30px;

}

p{
    font-size: 18px;
    font-weight: 500;
}


`;