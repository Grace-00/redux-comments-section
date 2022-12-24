
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

export type Replies = Omit<Comment, 'replies'> & { replyingTo: string }

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
    replies: Replies[]
}

interface CommentState {
    loading: boolean
    error: null | string
    data: null | Data
}

const initialState = {
    loading: false,
    error: null,
    data: initialComments
} as CommentState

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
                    state.data?.comments.map(comment => comment.replies = filteredReplies)
                }
            })
        },
    },
})

export const {
    upvoteComment,
    downvoteComment,
    deleteComment,
} = commentsSlice.actions

export default commentsSlice.reducer