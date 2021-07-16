import useAuth from '../hooks/useAuth'

export default function Home() {
  const {signinGithub, signinGoogle} = useAuth()
  return (
    <>
      <button onClick={() => signinGithub()}>Entrar com Github</button>
      <button onClick={() => signinGoogle()}>Entrar com Google</button>
    </>
  )
}
