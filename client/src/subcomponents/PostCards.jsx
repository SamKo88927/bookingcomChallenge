import React from 'react'
import { Attractions } from '../data'
import PostCard from './PostCard'
import "./postCards.scss"
const PostCards = () => {
    return (
        <div className='postcards'>
                <div className="line">
                    <PostCard dataArray={Attractions.slice(0,2)} />
                </div>
                <div className="line">
                <PostCard dataArray={Attractions.slice(2,5)} />
                </div>
        </div >
    )
}

export default PostCards