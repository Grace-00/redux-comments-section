import React from 'react'

interface CommentComponentProps {
  readonly children: React.ReactNode
}


const CommentComponent = (props: CommentComponentProps) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default CommentComponent