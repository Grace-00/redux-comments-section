/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/selectors'
import { deleteComment, downvoteComment, editComment, updateComment, upvoteComment } from '../../redux/slices/commentsSlice'
import { isCurrentUser } from '../../utils'
import { Button } from '../Button'
import { Content } from '../Content'
import { EditableContent } from '../EditableContent'
import { Rating } from '../Rating'
import { User } from '../User'
import './reply.css'

interface ReplyProps {
    readonly content: string
    readonly user: User
    readonly createdAt: string
    readonly score: number
    readonly isEditable?: boolean
    readonly replyingTo: string
    readonly replyId: number
}

const Reply = (props: ReplyProps) => {
    const dispatch = useAppDispatch()
    const getCurrentUser = useAppSelector(state => state.data?.currentUser.username)
    const { replyId, content, user, createdAt, score, isEditable, replyingTo } = props
    const [text, setText] = useState(content)
    return (
        <>
            <User user={user} createdAt={createdAt} />
            <>
                {isEditable ?
                    <EditableContent value={text} onChange={(e) => setText(e.target.value)} /> :
                    <Content content={content} replyingTo={replyingTo} />
                }
            </>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Rating className='rating-wrapper'>
                    <Button className='icon-button' icon={`./icon-plus.svg`} onClick={() => dispatch(upvoteComment(replyId))} />
                    <h4>{score}</h4>
                    <Button className='icon-button' icon={`./icon-minus.svg`} onClick={() => dispatch(downvoteComment(replyId))} />
                </Rating>
                {isCurrentUser(getCurrentUser, user.username) ?
                    <>
                        {isEditable ?
                            <Button className='update-button' buttonName='UPDATE' onClick={() => { dispatch(updateComment({ replyId: replyId, content: text, isEditable: false })) }} /> :
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Button className='delete-button' icon={`./icon-delete.svg`} buttonName='Delete' onClick={() => dispatch(deleteComment(replyId))} />
                                <Button className='edit-button' icon={`./icon-edit.svg`} buttonName='Edit' onClick={() => dispatch(editComment({ replyId: replyId, isEditable: true }))} />
                            </div>}
                    </>
                    :
                    <Button className='reply-button' icon={`./icon-reply.svg`} buttonName='Reply' onClick={() => { }} />
                }
            </div>
        </>
    )
}

export default Reply