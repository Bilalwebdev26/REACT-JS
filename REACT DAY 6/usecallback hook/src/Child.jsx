import React, { memo } from 'react'

const Child = ({learn,count}) => {
    console.log("Child Component re-Render")
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
