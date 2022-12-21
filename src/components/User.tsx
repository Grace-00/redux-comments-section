import React from 'react'
import { User } from '../redux/slices/commentsSlice'

interface UserProps {
    readonly user: User
}

const User = (props: UserProps) => {
  return (
    <div>{props.user.username}</div>
  )
}

export default User