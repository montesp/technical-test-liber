import { useSelector } from "react-redux"

const App = () => {
  const { users } = useSelector(state => state.users)

  return (
    <>
      <h1>Init project</h1>
      <p>State comprobation: { users[0].id}</p>
    </>
  )
}

export { App }
