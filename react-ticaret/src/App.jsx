import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Amazon from './component/Amazon'
import Sebet from './component/Sebet'

function App() {
  const [liste, setList] = useState([])
  const [warning, setWarning]=useState(false)
  const [show, setShow] =useState(true)

  const ListEkle=(item)=>{
   let isPresent=false
    liste.forEach((list)=>{
      if(item.id === list.id)
         isPresent=true
    })
    if(isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return
    }
    setList([...liste,item])
  }


const handleChange = (item, delta) => {
  const updatedList = liste.map((listItem) => {
    if (listItem.id === item.id) {
      const newAmount = listItem.amount + delta;
      return { ...listItem, amount: newAmount < 0 ? 0 : newAmount };
    }
    return listItem;
  });
  setList(updatedList);
};

  


  return (
      <>
       <Navbar list={liste.length} setShow={setShow}/>
        {
          warning && <div className='eklenmis'> var laaannn...</div>
        }
        {
          show ? <Amazon ListEkle={ListEkle}/>: <Sebet handleChange={handleChange} liste={liste} setList={setList} />
        }
        
      </>
    )
  }

export default App
