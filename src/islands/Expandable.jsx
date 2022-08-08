import { useState } from 'react'
import StaticContent from '../lagoons/StaticContent.jsx'

export default function Expandable({ title, children }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <StaticContent>
        This is static content inside an island. We call this a lagoon.
      </StaticContent>
      <button onClick={() => setExpanded(!expanded)}>{title}</button>
      <div className={`${expanded ? '' : 'hidden'}`}>
        <StaticContent>
          This a second lagoon. Below you see the children that were passed to
          the Expandable island:
        </StaticContent>
        {children}
      </div>
    </div>
  )
}
