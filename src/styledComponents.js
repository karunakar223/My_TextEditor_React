import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  height: 90%;
  width: 90%;
  background-color: #1b1c22;
  display: flex;
  border-radius: 6px;
`
export const LeftContainer = styled.div`
  min-height: 100%;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
  display: flex;
  min-height: 50vh;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TextEditorImage = styled.img`
  height: 85%;
  width: 70%;
`

export const MainHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`

export const CardContainer = styled.div`
  min-height: 80%;
  width: 45%;
  background-color: #25262c;
  border-radius: 12px;
  margin: 20px;
  border: 1px solid #cbd5e1;
`

export const ButtonContainer = styled.ul`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbd5e1;
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const BoldButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.boldColor};
`

export const ItalicButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.italicColor};
`

export const UnderlineButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.underlineColor};
`

export const TextArea = styled.textarea`
  height: 75%;
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: #cbd5e1;
  font-size: 18px;
  padding: 20px;
  line-height: 30px;
  text-underline-offset: 4px;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textUnderline};
`
