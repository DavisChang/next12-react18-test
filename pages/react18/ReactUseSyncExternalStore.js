import { useState, useSyncExternalStore } from "react"

const ReactUseSyncExternalStore = () => {
  const [showing, setShowing] = useState(false)
  return (
    <>
      <h1>React18 - useSyncExternalStore</h1>
      <div>
        <button onClick={() => setShowing(!showing)}>toggle</button>
        {
          showing && <TimeComponent />
        }
        <TimeComponent />
      </div>
    </>
  )
}

// external store
let now = new Date().toLocaleTimeString()
setInterval(() => {
  now = new Date().toLocaleTimeString()
  notifiers.forEach(notify => notify())
}, 1000)

let notifiers = new Set()
const subscribe = (notify) => {
  notifiers.add(notify)
  return () => notifiers.delete(notify)
}

const TimeComponent = () => {
  const store = useSyncExternalStore(subscribe, () => now, () => {})
  return <p>The time is: {store}</p>
}

export default ReactUseSyncExternalStore