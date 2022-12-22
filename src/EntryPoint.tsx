import React from 'react'
import { useAppSelector } from './redux/selectors'
import CommentComponent from './components/CommentComponent'


const EntryPoint: React.FC = () => {
  const initialComments = useAppSelector(state => state.data?.comments)

  return (
    <>
      {initialComments?.map((comment) => {
        return (
          <CommentComponent
            key={comment.id}
            user={comment.user}
            content={comment.content}
          />
        )
      })}
    </>
  )
}

export default EntryPoint