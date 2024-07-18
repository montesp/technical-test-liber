import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";

export const UserList = () => {
  return (
    <table className="table">
      <thead>
        <TableHead/>
      </thead>
      <tbody>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
      </tbody>
    </table>
  );
}