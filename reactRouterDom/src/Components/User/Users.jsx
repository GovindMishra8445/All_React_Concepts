import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {id} = useParams()
  return (
    <div className=' bg-gray-500 text-white font-bold text-center p-4 text-2xl'>
      Users: {id}
    </div>
  )
}

export default Users
