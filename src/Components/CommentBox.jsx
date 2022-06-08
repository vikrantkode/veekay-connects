import React from 'react'
import { Comments } from './Components'

const CommentBox = ({item}) => {
  return (
    <div className=''>{item ? <Comments post={item}/> : null}</div>
  )
}

export  {CommentBox}