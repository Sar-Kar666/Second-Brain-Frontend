import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContentModal } from './components/CreateContentModal'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  const [modalOpen, setModalOpen]=useState(false);


  return (

   <div  className='p-4'>
    <CreateContentModal open={modalOpen} onClose={()=>{
      setModalOpen(false);
    }}/>

    <div className=' flex justify-end gap-4'>
      <Button variant='primary' text="Add Content" startIcon={<PlusIcon/>} onClick={()=>{setModalOpen(true)}}/>
      <Button variant='secondary' text="Share Brain" startIcon={<ShareIcon/>}/>
</div>

<div className='flex gap-4'>
  <Card type="twitter" link="https://x.com/historyinmemes/status/1938963094245646500" title="first tweet" /> 
  <Card type="youtube" link="https://www.youtube.com/watch?v=h0zh7CqAkxY" title="first Video" /> 
   <Card type="youtube" link="https://www.youtube.com/watch?v=DEm0FLY7m4Y" title="Second Video" /> 
</div>


</div> 
 
  )
}

export default App
