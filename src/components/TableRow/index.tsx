import { Props } from "./types";

export const TableRow = ( { user }: Props ) => {
  return (
    <tr className="table__row table__row--body">
      <td className="table__cell table__cell--body">
        { user.id }
      </td>
      <td className="table__cell table__cell--body">
        { user.name }
      </td>
      <td className="table__cell table__cell--body">
        { user.email }
      </td>
      <td className="table__cell table__cell--body">
        { user.gender}
      </td>
      <td className="table__cell table__cell--body">
        { user.status}
      </td>
      <td className="table__cell table__cell--body">
        <button className="button">D</button>
        <button className="button">A</button>
        <button className="button">E</button>
      </td>
    </tr>
  );
}