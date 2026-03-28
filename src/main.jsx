import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovider from "./features/Auth/contexts/auth_context.jsx"
import { SongProvider } from './features/songs/context/song.contexts.jsx'


createRoot(document.getElementById('root')).render(
 <Authprovider>
 
   <SongProvider>
     
      <StrictMode>
    <App />
  </StrictMode>
    
  </SongProvider>
  
 </Authprovider>
)
