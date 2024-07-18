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
        <div className={`table__cell--status ${user.gender === 'female' ? 'table__cell--women':'table__cell--men'}`}>
          <p>
            { user.gender === 'female' ? 'Mujer':'Hombre'}
          </p>
        </div>
      </td>
      <td className="table__cell table__cell--body">
        <div className={`table__cell--status ${user.status === 'active' ? 'table__cell--active':'table__cell--inactive'}`}>
          { user.status === 'active' ? 'Activo':'Inactivo'}
        </div>
      </td>
      <td className="table__cell table__cell--body">
        <button className="button">D</button>
        <button className="button">A</button>
        <button className="button">E</button>
      </td>
    </tr>
  );
}