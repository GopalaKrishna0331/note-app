import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'

import NoteListItems from '../NoteItem'

import {
  Container,
  Heading,
  FormContainer,
  InputElement,
  TextAreaElement,
  Button,
  ListContainer,
  Image,
  Head,
  Paragraph,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [noteList, setNoteList] = useState([])
  const onClickButton = event => {
    event.preventDefault()
    const newList = {
      id: uuidV4(),
      title,
      description,
    }
    setNoteList(prevState => [...prevState, newList])
    setTitle('')
    setDescription('')
  }

  const noNoteAvailable = () => {
    console.log(0)
    return (
      <>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        />
        <Head>No Notes Yet</Head>
        <Paragraph>Notes you add will appear here</Paragraph>
      </>
    )
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onClickButton}>
        <InputElement
          type="text"
          value={title}
          placeholder="Title"
          onChange={event => setTitle(event.target.value)}
        />
        <TextAreaElement
          value={description}
          placeholder="Take a Note..."
          onChange={event => setDescription(event.target.value)}
        />
        <Button type="submit">Add</Button>
      </FormContainer>
      {noteList.length === 0 ? (
        noNoteAvailable()
      ) : (
        <ListContainer>
          {noteList.map(each => (
            <NoteListItems each={each} key={each.id} />
          ))}
        </ListContainer>
      )}
    </Container>
  )
}

export default Notes
