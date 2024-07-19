import { useUser } from "../../hooks/useUser";
import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";


export const UserList = () => {
  const { users } = useUser();

  return (
    <section className="flex flex-col overflow-auto border-2 border-gray-200 rounded-xl">
      <table className="w-full   text-2xl bg-white overflow-auto">
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