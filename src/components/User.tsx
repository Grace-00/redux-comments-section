import React from 'react'
import { User } from '../redux/slices/commentsSlice'

interface UserProps {
    readonly user: User
}

const User = (props: UserProps) => {
  return (
    <div>
      <img src={`./image-${props.user.username}.png`} alt={props.user.username}/>
      {props.user.username}
    </div>
  )
}

export default User