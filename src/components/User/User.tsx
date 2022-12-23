import React from 'react'
import { useAppSelector } from '../../redux/selectors'
import { User } from '../../redux/slices/commentsSlice'
import './user.css'


interface UserProps {
    readonly user: User
    readonly createdAt: string
}

const User = (props: UserProps) => {
  const currentUser = useAppSelector(state => state.data?.currentUser.username)

  const isCurrentUser = (username: string) => {
    return currentUser === username ? 
    (<p className='user-name'>{username} <span className='currentUser-tag'>you</span></p>) : 
    (<p className='user-name'>{username}</p>)
  }

  return (
    <div className='user'>
      <img src={`./image-${props.user.username}.png`} alt={props.user.username} className='user-img'/>
      {isCurrentUser(props.user.username)}
      <p>{props.createdAt}</p>
    </div>
  )
}

export default User