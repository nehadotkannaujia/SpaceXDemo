import React from 'react'
import {Link} from "react-router-dom"

export default function Error() {
  return (
    <div>
      requested resources not found. Go back to  <Link to="/">home page</Link>
    </div>
  )
}
