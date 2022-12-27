
import { createSlice } from "@reduxjs/toolkit";

import initialCommentsRaw from '../../data.json'

const initialComments: Data = initialCommentsRaw


interface Image {
    png: string
    webp: string
}

export interface User {
    image: Image
    username: string
}

export type Replies = Omit<Comment, 'replies'> & { replyingTo: string; isEditable?: boolean }

export interface Data {
    currentUser: User
    comments: Comment[]
}

export interface Comment {
    id: number
    content: string
    createdAt: string
    score: number
    user: User
    hasReplied?: boolean
    replies: Replies[]
}

interface CommentState {
    loading: boolean
    error: null | string
    data: null | Data
}

export const initialState: CommentState = {
    loading: false,
    error: null,
    data: initialComments
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {
        upvoteComment: (state, action) => {
            state.data?.comments.map(comment => {
                if (comment.replies.length > 0) {
                    comment.replies.map(reply => {
                        if(reply.id === action.payload) {
                            reply.score += 1
                        }
                    })
                }
                if (comment.id === action.payload) {
                        comment.score += 1
                }
            })
        },
        downvoteComment: (state, action) => {
            state.data?.comments.map(comment => {
                if (comment.replies.length > 0) {
                    comment.replies.map(reply => {
                        if(reply.id === action.payload) {
                            if(reply.score > 0) {
                                reply.score -= 1
                            }
                        }
                    })
                }
                if (comment.id === action.payload) {
                    if(comment.score > 0) {
                        comment.score -= 1
                    }
                }
            })
        },
        deleteComment: (state, action) => {
            state.data?.comments.map(comment => {
                if (comment.replies.length > 0) {                    
                    const filteredReplies = comment.replies.filter(reply => reply.id !== action.payload)
                    state.data?.comments.map(comment => {
                        if(comment.replies.length > 0) {
                            comment.replies = filteredReplies
                        }
                    })
                }
            })
        },
        editComment: (state, action) => {
            const {replyId, isEditable} = action.payload

            state.data?.comments.map(comment => {
                if (comment.replies.length > 0) {

                    const replies = comment.replies;
                    replies.find(reply => {
                        if(reply.id === replyId) {
                            reply.isEditable = isEditable
                        }
                    })
                }
            })
        },
        updateComment: (state, action) => {
            const {replyId, content, isEditable} = action.payload
 
            state.data?.comments.map(comment => {
                if (comment.replies.length > 0) {

                    const replies = comment.replies;
                    replies.find(reply => {
                        if(reply.id === replyId) {
                            reply.isEditable = isEditable
                            reply.content = content
                        }
                    })
                }
            })
        },
        reply: (state, action) => {

            state.data?.comments.find(comment => {   
                if(comment.replies) {
                    comment.replies.map(reply => {
                        if(reply.id === action.payload) {
                            reply.hasReplied = !reply.hasReplied
                        }
                    })
                }             
                if(comment.id === action.payload) {
                    comment.hasReplied = !comment.hasReplied
                }
            })
            
        },
        addReply: (state, action) => {
            const {content, replyId, replyingTo, username} = action.payload

            state.data?.comments.map(comment => {
                comment.replies.map(reply => {
                    if(reply.id === replyId) {
                        reply.hasReplied = false
                        const newReply = {
                            id: Math.random(),
                            createdAt: Date.now().toString(), //turn milliseconds into date format
                            score: 0,
                            content: content,
                            user: {
                                username: username,
                                image: {
                                    png: '',
                                    webp: ''
                                }
                            },
                            replyingTo: replyingTo
                        }
                        comment.replies.push(newReply)
                    }
                })
            })
        }
    },
})

export const {
    upvoteComment,
    downvoteComment,
    deleteComment,
    editComment,
    updateComment,
    reply,
    addReply
} = commentsSlice.actions

export default commentsSlice.reducer