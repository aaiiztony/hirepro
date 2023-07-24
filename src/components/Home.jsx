import React from 'react'
import Candidates from './Candidates'
import { candidates } from '../constants/constants'

const Home = ({ isAuthenticated}) => {
  return (
    <div>
         { isAuthenticated && (
         <div className=''>
          <div className="flex my-5 ml-0 md:ml-16">
            <div className="">
            <h2 className='font-dsans text-3xl font-bold mt-2'>Let's find your ideal candidate 🔎</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-0 md:ml-16">
            {candidates.map((candidate, index) =>
            <Candidates key={index} candidate={candidate} index={index}/>
            )}
            </div>
          </div>
        )}
    </div>
  )
}

export default Home