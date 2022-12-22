import React from 'react'
import { useAppSelector } from './redux/selectors'
import { Comment } from './components/Comment'


const EntryPoint: React.FC = () => {
  const initialComments = useAppSelector(state => state.data?.comments)

  return (
    <>
      {initialComments?.map((comment) => {
        return (
          <div className='comment-wrapper'>
            <Comment
              key={comment.id}
              user={comment.user}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
            />
          </div>
        )
      })}
    </>
  )
}

export default EntryPoint