import { Link } from 'react-router-dom'

import CounterIsland from '../islands/Counter.jsx'
import ExpandableIsland from '../islands/Expandable.jsx'
import MediaQueryIsland from '../islands/MediaQuery.jsx'
import { ServerContent } from '../components/ServerContent'

export function Home() {
  return (
    <main>
      <h1>
        Partial hydration with React and <i>Capri</i>
      </h1>
      <section>This page is static, but contains some dynamic parts.</section>
      <section>
        Here is a simple counter: <CounterIsland />
      </section>
      <section>
        And here is another one, independent from the one above:{" "}
        <CounterIsland start={100} />
      </section>
      <ExpandableIsland title="Click to expand">
        This island receives children as prop. They are only rendered upon build
        time.
        <ServerContent>
          The code for <code>ServerContent</code> won't show up in the client
          bundle.
        </ServerContent>
      </ExpandableIsland>
      <MediaQueryIsland />
      <Link to="/about">Link to another page</Link>
    </main>
  )
}
