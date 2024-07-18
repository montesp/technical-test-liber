import { UserList } from "../../components/UserList";

export const HomePage = () => {
  return (
    <main className="home">
      <h1 className='home__title'>
        Lista de Usuarios
      </h1>
      <UserList/>
    </main>
  );
}