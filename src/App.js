import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import contatos from  './contacts.json'

function App() {
  const[lista,setLista]=useState(contatos.slice(0,5))
  const[otherLista,setOtherLista]=useState(contatos.slice(5))
  let newLista=[]
  for(let cont of lista){
    newLista.push(
      <tr key={lista.indexOf(cont)}>
        <td>
          <img src={cont.pictureUrl} width={80}/>
        </td>
        <td>
          {cont.name}
        </td>
        <td>
          {Math.round(cont.popularity*100)/100}
        </td>
        <td>
          {cont.wonOscar?'🏆':'-'}
        </td>
        <td>
          {cont.wonEmmy?'🏆':'-'}
        </td>
        <td>
          <button index={lista.indexOf(cont)} onClick={del}>
            Delete
          </button>
        </td>
      </tr>
    )
  }
  const[conts,setConts]=useState(newLista)
  
  function Incluir(){
    let randomInt=Math.floor(Math.random()*(otherLista.length))
    setLista([...lista,otherLista[randomInt]])
    let listaSync=[...lista,otherLista[randomInt]]
    otherLista.splice(randomInt,1)
    setOtherLista(otherLista)
    let newLista=[]
    for(let cont of listaSync){
      newLista.push(
        <tr key={listaSync.indexOf(cont)}>
          <td>
            <img src={cont.pictureUrl} width={80}/>
          </td>
          <td>
            {cont.name}
          </td>
          <td>
            {Math.round(cont.popularity*100)/100}
          </td>
          <td>
            {cont.wonOscar?'🏆':'-'}
          </td>
          <td>
            {cont.wonEmmy?'🏆':'-'}
          </td>
          <td>
            <button index={listaSync.indexOf(cont)} onClick={del}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
    setConts(newLista)
  }

  function sortName(){
    setLista(lista.sort((a,b)=>{
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    }))
    let newLista=[]
    for(let cont of lista){
      newLista.push(
        <tr key={lista.indexOf(cont)}>
          <td>
            <img src={cont.pictureUrl} width={80}/>
          </td>
          <td>
            {cont.name}
          </td>
          <td>
            {Math.round(cont.popularity*100)/100}
          </td>
          <td>
            {cont.wonOscar?'🏆':'-'}
          </td>
          <td>
            {cont.wonEmmy?'🏆':'-'}
          </td>
          <td>
            <button index={lista.indexOf(cont)} onClick={del}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
    setConts(newLista)
  }
  function sortPop(){
    setLista(lista.sort((a,b)=>{
      if (a.popularity>b.popularity) return -1;
      if (a.popularity<b.popularity) return 1;
      if (a.popularity===b.popularity) return 0;
    }))
    let newLista=[]
    for(let cont of lista){
      newLista.push(
        <tr key={lista.indexOf(cont)}>
          <td>
            <img src={cont.pictureUrl} width={80}/>
          </td>
          <td>
            {cont.name}
          </td>
          <td>
            {Math.round(cont.popularity*100)/100}
          </td>
          <td>
            {cont.wonOscar?'🏆':'-'}
          </td>
          <td>
            {cont.wonEmmy?'🏆':'-'}
          </td>
          <td>
            <button index={lista.indexOf(cont)} onClick={del}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
    setConts(newLista)


  }

  function del (e){
    let indexDel=e.target.getAttribute('index')
    setOtherLista([...otherLista,lista[indexDel]])
    lista.splice(indexDel,1)
    setLista(lista)
    let newLista=[]
    for(let cont of lista){
      newLista.push(
        <tr key={lista.indexOf(cont)}>
          <td>
            <img src={cont.pictureUrl} width={80}/>
          </td>
          <td>
            {cont.name}
          </td>
          <td>
            {Math.round(cont.popularity*100)/100}
          </td>
          <td>
            {cont.wonOscar?'🏆':'-'}
          </td>
          <td>
            {cont.wonEmmy?'🏆':'-'}
          </td>
          <td>
            <button index={lista.indexOf(cont)} onClick={del}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
    setConts(newLista)
    

  }
  return (
    <div className="App">
      <h2>IronContacts</h2>
      <div className='buttons'>
        <button onClick={Incluir}>Add Random Contact</button>
        <button onClick={sortPop}>Sort by popularity</button>
        <button onClick={sortName}>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>
              Picture
            </td>
            <td>
              Name
            </td>
            <td>
              Popularity
            </td>
            <td>
              Won an Oscar
            </td>
            <td>
              Won an Emmy
            </td>
            <td>
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {conts}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
