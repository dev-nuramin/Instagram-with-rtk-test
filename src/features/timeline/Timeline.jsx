
import React, { useEffect } from 'react';
import './Timeline.scss';
import CreatePost from '../../Components/CreatePost/CreatePost';
import Maintimeline from '../../Components/MainTimeline/Maintimeline';
import { useDispatch } from 'react-redux';
import { fetchPost } from './timelineAPI';
const Timeline = () => {
  const dispatch = useDispatch()
  useEffect(() => {
   
   dispatch(fetchPost())
  }, [dispatch])

  return (
    <div className='timeline-wrapper'>
        <div className="timeline-middle">
            <CreatePost />
            <Maintimeline />
        </div>
    </div>
  )
}

export default Timeline;