/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'
import { useAppSelector } from './redux/selectors'
import { Comment } from './components/Comment'
import { ReplyFromCurrentUser } from './components/ReplyFromCurrentUser'
import { EditableContent } from './components/EditableContent'
import { Button } from './components/Button'


const EntryPoint: React.FC = () => {
  const getInitialComments = useAppSelector(state => state.comments.data?.comments)

  const [newContent, setNewContent] = useState('')
  return (
    <>
      {getInitialComments?.map((comment) => {
        return (
          <div className='comment-wrapper' key={comment.id}>
            <Comment
              commentId={comment.id}
              user={comment.user}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              hasReplied={comment.hasReplied}
              replies={comment.replies}
            />
          </div>
        )
      })}
      
      {/* add onClick logic */}
      {/* <ReplyFromCurrentUser>
        <div className='comment'>
          <div className='reply-from-current-user'>
            <img src='./image-juliusomo.png' alt='juliusomo' className='user-img' />
            <EditableContent onChange={(e) => setNewContent(e.target.value)} value={newContent} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div></div>
            <Button className='reply-from-current-user-button' onClick={() => { }} buttonName='SEND' />
          </div>
        </div>
      </ReplyFromCurrentUser> */}
    </>
  )
}

export default EntryPoint