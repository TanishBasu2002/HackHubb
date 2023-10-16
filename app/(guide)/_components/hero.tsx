"use client"
import { description } from './constant'
import Intro from './intro';

export const Hero= () => {
  const desc = description;
  return (
    <div className='m-5'>
        <div className='p-5'>
        <Intro />
        </div>
        <div className='mt-32'>
        <h1 className='head-text mb-9'>About</h1>
        <p className='font-semibold'>{desc.description}</p>
        </div>
    </div>
  )
}
