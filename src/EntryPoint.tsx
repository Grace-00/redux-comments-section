import React from 'react'
import { useAppSelector } from './redux/selectors'
import { Comment } from './components/Comment'


const EntryPoint: React.FC = () => {
  const initialComments = useAppSelector(state => state.data?.comments)

  return (
    <>
      {initialComments?.map((comment) => {
        return (
          <div className='app'>
            <Comment
              key={comment.id}
              user={comment.user}
              content={comment.content}
              createdAt={comment.createdAt}
            />
          </div>
        )
      })}
    </>
  )
}

export default EntryPoint