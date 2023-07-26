import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 32px;
  font-weight: 600;
`
export const FormContainer = styled.form`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 12px;
  padding: 22px;
  margin-bottom: 22px;
`
export const InputElement = styled.input`
  height: 45px;
  width: 100%;
  border: none;
  outline: none;
  margin: 12px;
`
export const TextAreaElement = styled.textarea`
  height: 45px;
  width: 100%;
  border: none;
  outline: none;
  margin: 12px;
`
export const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: #4c63b6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 44px;
`
export const Head = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-weight: 600;
  font-size: 28px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #aab8c8;
  font-weight: 300;
  font-size: 18px;
`
