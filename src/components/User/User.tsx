import React from 'react'
import { User } from '../../redux/slices/commentsSlice'
import './user.css'


interface UserProps {
    readonly user: User
    readonly createdAt: string
}

const User = (props: UserProps) => {
  return (
    <div className='user'>
      <img src={`./image-${props.user.username}.png`} alt={props.user.username} className='user-img'/>
      <p className='user-name'>{props.user.username}</p>
      <p>{props.createdAt}</p>
    </div>
  )
}

export default User