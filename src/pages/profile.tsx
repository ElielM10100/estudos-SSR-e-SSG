type Props = {
    user: {
      name: string;
      time: string;
    };
  };
  
  export default function Profile({ user }: Props) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Perfil 👤</h1>
        <p>Nome: {user.name}</p>
        <p>Hora atual do servidor: {user.time}</p>
      </div>
    );
  }
  
  // 🔥 Gera a página no servidor a cada request
  export async function getServerSideProps() {
    const user = {
      name: "Eliel Nicolas",
      time: new Date().toLocaleTimeString(),
    };
  
    return {
      props: { user },
    };
  }
  