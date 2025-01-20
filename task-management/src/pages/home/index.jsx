import { useEffect, useState, useRef } from 'react'           //react Hooks
import './style.css'
import Trash from '../../../assets/trash.png'         //obrigatoriamente o import tende a ser maiusculo
import api from '../../services/api'


function Home() {
  const [tasks, setTasks] = useState([])

  const inputTitle = useRef()
  const inputDescription = useRef()
  const inputStatus = useRef()

  async function getTasks(){
    const tasksFromApi = await api.get('./usuarios')

    setTasks(tasksFromApi.data)
    console.log(tasks)
  }

  async function createTasks(){
     await api.post('./usuarios', {

     titulo: inputTitle.current.value,
     descricao: inputDescription.current.value,
     status: inputStatus.current.value

     })
     getTasks()
  }

  async function deleteTasks(id){
     await api.delete(`/usuarios/${id}`)             // essa forma dentro dos parenteses permite colocar uma variavel dentro dos parametros

     getTasks()
  }

  useEffect(() => {
    getTasks()
  },[])

  return (
      <div className='container'>
        <form action="">
          <h1>Gerenciador de tarefas</h1>
          <label>Titulo:</label>
          <input name='titulo' type='text' placeholder='Escreva o titulo:' ref={inputTitle}></input>
          <label>Descrição:</label>
          <input name='descricao' type='text' placeholder='Escreva a descrição:' ref={inputDescription}></input>
          <label>Status:</label>
          <input name='status' type='text' placeholder='Defina o Status:' ref={inputStatus}></input>
          <button type='button' onClick={createTasks}>Cadastrar Tarefas</button>
        </form>
        
        {tasks.map((tasks) => (
        
        <div key={tasks.id} className='card'>
          <div>
            <p>Titulo: <span>{tasks.titulo}</span></p>
            <p>Descrição: <span>{tasks.descricao}</span></p>
            <p>Status: <span>{tasks.status}</span></p>
          </div>
          <button onClick={() => deleteTasks(tasks.id)}>
            <img src={Trash} alt="lixo" />
          </button>
        </div>
        ))}

        </div>
  )
}


export default Home
