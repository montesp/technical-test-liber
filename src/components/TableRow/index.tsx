import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { Props } from "./types";
import { AiFillEdit, AiFillDelete, AiOutlineUser } from "react-icons/ai";
import './styles.scss';

export const TableRow = ( { user }: Props ) => {
  const { changeToOpenDeleteModal } = useModal();

  return (
    <tr className="row w-min min-w-full py-2 px-3 border-b-2 border-gray-200 text-black opacity-80 tablet-sm:px-4 desktop-sm:px-8 last:border-none">
      <td className="flex items-center px-2 text-md font-semibold text-start text-ellipsis tablet-sm:text-lg">
        { user.id }
      </td>
      <td className="flex items-center px-2 text-md font-semibold text-start text-ellipsis tablet-sm:text-lg">
        { user.name }
      </td>
      <td className="flex items-center px-2 text-md font-semibold text-start text-ellipsis tablet-sm:text-lg">
        { user.email }
      </td>
      <td className="flex items-center px-2 text-md font-semibold text-start text-ellipsis tablet-sm:text-lg">
        <div className={`px-5 py-3 rounded-3xl ${user.gender === 'female' ? 'bg-purple-100 text-purple-200': 'bg-blue-100 text-blue-200'}`}>
            { user.gender === 'female' ? 'Mujer':'Hombre'}
        </div>
      </td>
      <td className="flex items-center px-2 text-md font-semibold text-start text-ellipsis tablet-sm:text-lg">
        <div className={`px-5 py-3 rounded-3xl ${user.status === 'active' ? 'bg-success-200 text-success-100':'bg-error-200 text-error-100'}`}>
          { user.status === 'active' ? 'Activo':'Inactivo'}
        </div>
      </td>
      <td className="flex items-center gap-1 px-2 text-md font-semibold text-start text-ellipsis tablet-sm:text-lg">
        <button className=" py-3 px-4 rounded-3xl bg-gray-900 text-sm text-white font-semibold cursor-pointer">
          <Link to={`user/${user.id}`}>
            <AiOutlineUser size={14}  />
          </Link>
        </button>
        <button  className="py-3 px-4 rounded-3xl bg-gray-900 text-sm text-white font-semibold cursor-pointer">
          <Link to={`edit/${user.id}`}>
            <AiFillEdit size={14}  />
          </Link>
        </button>
        <button
          onClick={() => changeToOpenDeleteModal(user)}
          className="py-3 px-4 rounded-3xl bg-gray-900 text-sm text-white font-semibold cursor-pointer"
        >
          <AiFillDelete size={14}  />
        </button>
      </td>
    </tr>
  );
}