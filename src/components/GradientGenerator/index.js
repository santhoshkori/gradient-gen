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
  Buttoncontainer2,
  Li,
  Colorscont,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    color12: '#8ae323',
    color21: '#014f7b',
    directioncolor: '',
    directioncolorgen: 'top',
  }

  changeDirection = event => {
    this.setState({directioncolor: event.target.value})
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  getChange = event => {
    event.preventDefault()
    const {color1, color2, directioncolor} = this.state

    this.setState({
      color12: color1,
      color21: color2,
      directioncolorgen: directioncolor,
    })
  }

  render() {
    const {color1, color2, directioncolorgen, color12, color21} = this.state
    return (
      <Container
        directioncolorgen={directioncolorgen}
        color12={color12}
        color21={color21}
        data-testid="gradientGenerator"
      >
        <Container1 onSubmit={this.getChange}>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <Buttoncontainer>
            {gradientDirectionsList.map(eachdirection => (
              <Li key={eachdirection.directionId}>
                <Button
                  type="button"
                  value={eachdirection.value}
                  onClick={this.changeDirection}
                  istrue={eachdirection.value === directioncolorgen}
                >
                  {eachdirection.displayText}
                </Button>
              </Li>
            ))}
          </Buttoncontainer>
          <Para>Pick the Colors</Para>
          <Colorscont>
            <Buttoncontainer2>
              <p>{color12}</p>
              <p>{color21}</p>
            </Buttoncontainer2>

            <Buttoncontainer2>
              <Inputcolor
                type="color"
                value={color1}
                onChange={this.changeColor1}
              />
              <Inputcolor
                type="color"
                value={color2}
                onChange={this.changeColor2}
              />
            </Buttoncontainer2>
          </Colorscont>

          <Genbutton type="submit">Generate</Genbutton>
        </Container1>
      </Container>
    )
  }
}

export default GradientGenerator
