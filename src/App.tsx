import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  

  return (
   <div >
    <div className=' py-7 gap-5 flex justify-end '>

    
    <Button variant='primary' text="Add Content" startIcon={<PlusIcon/>}/>
    <Button variant='secondary' text="Share Brain" startIcon={<ShareIcon/>}/>
    
</div>
<Card/> 
   </div> 
 
      
    
  )
}

export default App
