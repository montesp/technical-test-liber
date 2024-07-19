import { useModal } from "../../hooks/useModal";
import { Props } from "./types";
import { AiFillSave, AiFillEdit, AiFillDelete } from "react-icons/ai";


export const TableRow = ( { user }: Props ) => {
  const {
    changeToOpenDeleteModal
  } = useModal();

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
        <button className="button button__action">
          <AiFillSave size={14}  />
        </button>
        <button className="button button__action">
          <AiFillEdit size={14}  />
        </button>
        <button
          onClick={() => changeToOpenDeleteModal(user)}
          className="button button__action"
        >
          <AiFillDelete size={14}  />
        </button>
      </td>
    </tr>
  );
}