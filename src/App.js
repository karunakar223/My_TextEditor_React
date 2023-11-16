import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  SubContainer,
  LeftContainer,
  MainHeading,
  TextEditorImage,
  CardContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
  ButtonContainer,
  ListItem,
  ImageContainer,
} from './styledComponents'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isBoldClicked: false,
    isItalicClicked: false,
    isUnderlineClicked: false,
  }

  onBold = () => {
    this.setState(prevState => ({isBoldClicked: !prevState.isBoldClicked}))
  }

  onItalic = () => {
    this.setState(prevState => ({isItalicClicked: !prevState.isItalicClicked}))
  }

  onUnderline = () => {
    this.setState(prevState => ({
      isUnderlineClicked: !prevState.isUnderlineClicked,
    }))
  }

  render() {
    const {isBoldClicked, isItalicClicked, isUnderlineClicked} = this.state

    const boldColor = isBoldClicked ? '#faff00' : '#f1f5f9'
    const italicColor = isItalicClicked ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderlineClicked ? '#faff00' : '#f1f5f9'
    const fontWeight = isBoldClicked ? 'bold' : 'normal'
    const fontStyle = isItalicClicked ? 'italic' : 'normal'
    const textUnderline = isUnderlineClicked ? 'underline' : 'normal'

    return (
      <AppContainer>
        <SubContainer>
          <LeftContainer>
            <MainHeading>Text Editor</MainHeading>
            <ImageContainer>
              <TextEditorImage
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </ImageContainer>
          </LeftContainer>
          <CardContainer>
            <ButtonContainer>
              <ListItem>
                <BoldButton
                  boldColor={boldColor}
                  onClick={this.onBold}
                  type="button"
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </BoldButton>
              </ListItem>
              <ListItem>
                <ItalicButton
                  onClick={this.onItalic}
                  type="button"
                  italicColor={italicColor}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </ListItem>
              <ListItem>
                <UnderlineButton
                  onClick={this.onUnderline}
                  type="button"
                  underlineColor={underlineColor}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </ListItem>
            </ButtonContainer>
            <TextArea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textUnderline={textUnderline}
            />
          </CardContainer>
        </SubContainer>
      </AppContainer>
    )
  }
}

export default App
