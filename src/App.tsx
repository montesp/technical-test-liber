import { useSelector } from "react-redux"

const App = () => {
  const { users } = useSelector(state => state.users)

  return (
    <>
      <h1 className="test-title">Init project</h1>
      <p className="test-text">State comprobation: { users[0].id}</p>
    </>
  )
}

export { App }
