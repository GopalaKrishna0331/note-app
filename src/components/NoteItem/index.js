import {ListItems, ListHeading, ListDescription} from './styledComponents'

const NoteListItems = props => {
  const {each} = props
  const {title, description} = each
  return (
    <ListItems>
      <ListHeading>{title}</ListHeading>
      <ListDescription>{description}</ListDescription>
    </ListItems>
  )
}

export default NoteListItems
