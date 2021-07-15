import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import read from '../services/read'
import write from '../services/write'

const Dashboard = () => {
  const {user, loading, signin, signout} = useAuth()
  const router = useRouter()

  useEffect(() => {
    if(!user) {
      router.replace('/')
    }
  }, [])
  return(
    <>
      {loading && <h1>CARREGANDO</h1>}
      {!loading &&
      <>
        <h1>Hello World</h1>
        <h2>{user?.displayName}</h2>
        <button onClick={()=>write()}>Enviar dados</button>
        <button onClick={()=>read()}>Ler dados</button>
        <button onClick={()=>signout()}>Sair</button>
      </>}
    </>
  )
}

export default Dashboard