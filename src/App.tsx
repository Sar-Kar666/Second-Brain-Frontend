import './App.css'
import { Button } from './component/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  

  return (
    <>
     <Button startIcon={<PlusIcon size="lg"/>}   variant="primary" text="share" size="sm" endIcon={<ShareIcon size="lg"/>}/>
   
    </>
  )
}

export default App
