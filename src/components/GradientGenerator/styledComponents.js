import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: linear-gradient(
    to props=>props.directioncolor,
    props.color1,
    props.color2
  );
`
export const Container1 = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  margin-right: 10px;
  padding: 5px;
  border-style: none;
  border-radius: 4px;
  background-color: #ededed;
`
export const Genbutton = styled.button`
  padding: 5px;
  border-style: none;
  border-radius: 4px;
  background-color: #00c9b7;
  margin-top: 25px;
  color: white;
`
export const Heading = styled.h1`
  color: black;
`
export const Para = styled.p`
  color: black;
`
export const Inputcolor = styled.input`
  margin-right: 40px;
`
export const Buttoncontainer = styled.div``
