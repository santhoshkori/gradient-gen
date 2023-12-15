import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: linear-gradient(
    to ${props => props.directioncolorgen},
    ${props => props.color12},
    ${props => props.color21}
  );
  height: 100vh;
  color: white;
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
  opacity:${props => (props.istrue ? '1' : '0.5')}
  background-color:"#ededed"
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
  color: white;
`

export const Li = styled.li``
export const Para = styled.p`
  color: white;
`
export const Inputcolor = styled.input`
  margin-right: 40px;
`
export const Buttoncontainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`

export const Buttoncontainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  align-items: center;
`
export const Colorscont = styled.div``
