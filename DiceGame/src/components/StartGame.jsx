import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/button'


const StartGame = ({toggle}) => {
  return (
    <>

    <Container>

      <div className='left'>

        <img style={{width:"800px"}} src="public\images\dices.png" alt="" />
      </div>
      

      <div className='right'>
        <h1>
          START GAME
        </h1>

        <Button onClick={toggle}>Play Now</Button>
      </div>


    </Container>
    
    </>

  )
}

export default StartGame

  const Container = styled.div`

  max-width: 1180px;
  display: flex;
  margin: 0px auto;
  height: 100vh;
  align-items: center;

  .right h1{
    font-size: 60px;
    white-space: nowrap;
  }

`;
