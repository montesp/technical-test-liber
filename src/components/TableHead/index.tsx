import './styles.scss';

export const TableHead = () => {
  return (
    <tr className="row w-min min-w-full py-2 px-3 border-b border-gray-300 text-gray-100 opacity-80 tablet-sm:px-4 desktop-sm:px-8">
      <th className="flex items-center py-2 px-1 text-lg font-semibold text-start text-ellipsis">ID</th>
      <th className="flex items-center py-2 px-1 text-lg font-semibold text-start text-ellipsis">Nombre</th>
      <th className="flex items-center py-2 px-1 text-lg font-semibold text-start text-ellipsis">Correo</th>
      <th className="flex items-center py-2 px-1 text-lg font-semibold text-start text-ellipsis">Género</th>
      <th className="flex items-center py-2 px-1 text-lg font-semibold text-start text-ellipsis">Estado</th>
      <th className="flex items-center py-2 px-1 text-lg font-semibold text-start text-ellipsis">Acciones</th>
    </tr>
  );
}