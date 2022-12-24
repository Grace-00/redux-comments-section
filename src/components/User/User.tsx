import React from 'react'
import { useAppSelector } from '../../redux/selectors'
import { User } from '../../redux/slices/commentsSlice'
import { isCurrentUser } from '../../utils'
import './user.css'


interface UserProps {
    readonly user: User
    readonly createdAt: string
}

const User = (props: UserProps) => {
  const getCurrentUser = useAppSelector(state => state.data?.currentUser.username)

  return (
    <div className='user'>
      <img src={`./image-${props.user.username}.png`} alt={props.user.username} className='user-img'/>
      {isCurrentUser(getCurrentUser, props.user.username) ?
      <p className='user-name'>{props.user.username} <span className='currentUser-tag'>you</span></p> :
      <p className='user-name'>{props.user.username}</p>
    }
      <p>{props.createdAt}</p>
    </div>
  )
}

export default User