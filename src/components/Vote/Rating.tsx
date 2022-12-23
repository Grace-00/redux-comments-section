import React from 'react'
import './rating.css'

interface RatingProps {
  readonly children: React.ReactNode
  readonly className: string
}

const Rating = (props: RatingProps) => {
  return (
    <div className={props.className}>{props.children}</div>
  )
}

export default Rating