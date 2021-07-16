import useAuth from '../hooks/useAuth'
import read from '../services/read'
import write from '../services/write'

export default function Home() {
  const {signinGithub, signinGoogle} = useAuth()
  return (
    <>
      <button onClick={() => signinGithub()}>Entrar com Github</button>
      <button onClick={() => signinGoogle()}>Entrar com Google</button>
      <button onClick={()=>write()}>Enviar dados</button>
      <button onClick={()=>read()}>Ler dados</button>
    </>
  )
}
