import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/selectors'
import { deleteReply, downvote, editComment, reply, updateComment, upvote, addReply } from '../../redux/slices/commentsSlice'
import { openModal } from '../../redux/slices/modalSlice'
import { isCurrentUser } from '../../utils'
import { Button } from '../Button'
import { Content } from '../Content'
import { EditableContent } from '../EditableContent'
import { Modal } from '../Modal'
import { Rating } from '../Rating'
import { ReplyFromCurrentUser } from '../ReplyFromCurrentUser'
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
    readonly hasReplied?: boolean
}

const Reply = (props: ReplyProps) => {
    const dispatch = useAppDispatch()
    const { replyId, content, user, createdAt, score, isEditable, replyingTo } = props
    const getCurrentUsername = useAppSelector(state => state.comments.data?.currentUser.username)
    const showModal = useAppSelector(state => state.modal.isOpen)
    const currentUser = isCurrentUser(getCurrentUsername, user.username)
    const [newContent, setNewContent] = useState(currentUser ? content : `@${props.user.username},`)

    const handleDeleteComment = () => {
        if (!showModal) {
            dispatch(openModal(true))
        }
    }

    const handleReply = () => {
        dispatch(addReply({ replyId: replyId, content: newContent, replyingTo: '', username: getCurrentUsername }))
    }
    return (
        <>
            <User user={user} createdAt={createdAt} />
            <>
                {isEditable ?
                    <EditableContent value={newContent} onChange={(e) => setNewContent(e.target.value)} /> :
                    <Content content={content} replyingTo={replyingTo} />
                }
            </>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Rating className='rating-wrapper'>
                    <Button
                        className='icon-button'
                        icon={`./icon-plus.svg`}
                        onClick={() => dispatch(upvote({replyId: replyId, parentComment:true}))}
                    />
                    <h4>{score}</h4>
                    <Button
                        className='icon-button'
                        icon={`./icon-minus.svg`}
                        onClick={() => dispatch(downvote({replyId: replyId, parentComment:true}))}
                    />
                </Rating>
                {currentUser ?
                    <>
                        {isEditable ?
                            <Button 
                            className='update-button' 
                            buttonName='UPDATE' 
                            onClick={() => { dispatch(updateComment({ replyId: replyId, content: newContent, isEditable: false })) }} /> :
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Button
                                    className='delete-button'
                                    icon={`./icon-delete.svg`}
                                    buttonName='Delete'
                                    onClick={() => handleDeleteComment()}
                                />
                                <Button
                                    className='edit-button'
                                    icon={`./icon-edit.svg`}
                                    buttonName='Edit'
                                    onClick={() => dispatch(editComment({ replyId: replyId, isEditable: true }))}
                                />
                            </div>}
                    </>
                    :
                    <Button className='reply-button' icon={`./icon-reply.svg`} buttonName='Reply' onClick={() => dispatch(reply(replyId))} />
                }
            </div>
            {props.hasReplied && <ReplyFromCurrentUser>
                <div className='comment'>
                    <div className='reply-from-current-user'>
                        <img src='./image-juliusomo.png' alt='juliusomo' className='user-img' />
                        <EditableContent
                            onChange={(e) => setNewContent(e.target.value)}
                            value={newContent}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div></div>
                        <Button
                            className='reply-from-current-user-button'
                            onClick={handleReply}
                            buttonName='REPLY'
                        />
                    </div>
                </div>
            </ReplyFromCurrentUser>
            }
            {showModal && currentUser &&
                <Modal>
                    <div style={{ backgroundColor: 'hsl(0, 0%, 100%)', padding: 25, borderRadius: 8, maxWidth: 400 }}>
                        <h4 style={{ color: 'hsl(212, 24%, 26%)', fontWeight: 500, fontSize: 20 }}>Delete Comment</h4>
                        <p style={{ lineHeight: '24px', paddingTop: 20, paddingBottom: 20 }}>
                            Are you sure you want to delete this comment?
                            This will remove the comment and can’t be undone.</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Button
                                className='cancel-confirmation-modal-btn'
                                buttonName='NO, CANCEL'
                                onClick={() => dispatch(openModal(false))}
                            />
                            <Button
                                className='delete-confirmation-modal-btn'
                                buttonName='YES, DELETE'
                                onClick={() => dispatch(deleteReply(replyId))}
                            />
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}

export default Reply