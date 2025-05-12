import styled from "styled-components";



export const Button = styled.button`
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 220px;
  height: 44px;
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  transition: 0.2s background ease-in;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s background ease-in;
  }


`;
export const OutlineButton = styled(Button)`

background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
    transition: 0.2s background ease-in;
  }


  


`;