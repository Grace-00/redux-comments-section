import React from 'react'
import { useAppSelector } from './redux/selectors'
import CommentComponent from './components/CommentComponent'
import User from './components/User'


const EntryPoint: React.FC = () => {
  const comments = useAppSelector(state => state.data?.comments) 

  console.log( comments)

  return (
    <>
     {comments?.map((comment) => {
      return  (
      <CommentComponent key={comment.id}>
        <User user={comment.user}/>
      </CommentComponent>
      )
     })}
    </>
  )
}

export default EntryPoint