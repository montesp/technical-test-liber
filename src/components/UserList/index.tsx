import { useSelector } from "react-redux";
import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";


export const UserList = () => {
  const { users } = useSelector( (state) => state.users)
  

  return (
    <section className="wrapper">
      <table className="table">
        <thead>
          <TableHead/>
        </thead>
        <tbody>
          {
            users.map( user => (
              <TableRow key={user.id} user={user}/>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}