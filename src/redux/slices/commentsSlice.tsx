
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

type Replies = Omit<Comment, 'replies'> & { replyingTo: string }

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
                if (comment.id === action.payload) {
                    comment.score += 1
                }
            })
        },
        downvoteComment: (state, action) => {
            state.data?.comments.map(comment => {
                if (comment.id === action.payload) {
                    comment.score -= 1
                }
            })
        },
    },
})

export const {
    upvoteComment,
    downvoteComment
} = commentsSlice.actions

export default commentsSlice.reducer