
export const TableHead = () => {
  return (
    <tr className="table__row table__row--head">
      <th className="table__cell table__cell--head">ID</th>
      <th className="table__cell table__cell--head">Nombre</th>
      <th className="table__cell table__cell--head">Correo</th>
      <th className="table__cell table__cell--head">Género</th>
      <th className="table__cell table__cell--head">Estado</th>
      <th className="table__cell table__cell--head">Acciones</th>
    </tr>
  );
}