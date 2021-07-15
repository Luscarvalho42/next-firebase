import useAuth from '../hooks/useAuth'

export default function Home() {
  const {signin} = useAuth()
  return (
    <button onClick={() => signin()}>Entrar com Github</button>
  )
}
