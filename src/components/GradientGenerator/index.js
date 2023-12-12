import {Component} from 'react'
import {
  Container,
  Container1,
  Heading,
  Para,
  Inputcolor,
  Buttoncontainer,
  Button,
  Genbutton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {color1: '#8ae323', color2: '#014f7b', directioncolor: 'top'}

  render() {
    const {color1, color2, directioncolor} = this.state
    return (
      <Container>
        <Container1
          directioncolor={directioncolor}
          color1={color1}
          color2={color2}
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <Buttoncontainer>
            {gradientDirectionsList.map(eachdirection => (
              <Button
                type="button"
                value={eachdirection.value}
                key={eachdirection.directionId}
              >
                {eachdirection.displayText}
              </Button>
            ))}
          </Buttoncontainer>
          <Para>Pick the Colors</Para>
          <Buttoncontainer>
            <Inputcolor type="color" value={color1} />
            <Inputcolor type="color" value={color2} />
          </Buttoncontainer>
          <Genbutton type="submit">Generate</Genbutton>
        </Container1>
      </Container>
    )
  }
}

export default GradientGenerator
