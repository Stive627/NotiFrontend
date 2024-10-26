import React from 'react'
import Face6Icon from '@mui/icons-material/Face6';
import LogoutIcon from '@mui/icons-material/Logout';
import {UseTheme} from '../useHook/useContextTheme'

const {theme} = UseTheme()

const SelectMode = () =>{
  return(
    
  )
}


const ProfileBox = () =>{
  const eltName= (name) => <p style={{color:'rgba(37, 36, 34, 1)', fontSize:'20px'}}  className=' '>{name}</p>
  const data = [
    {name: eltName('Avatar'), elt:<Face6Icon style={{color:'rgba(37, 36, 34, 1)'}}/>},
    {name:'', elt:''},
    {name: eltName('Logout'), elt:<LogoutIcon style={{color:'rgba(37, 36, 34, 1)'}}/>}
  ]
  return(
    <div className=' grid grid-cols-3 divide-y'>

    </div>
  )
}



function ProfileHomePage() {
  return (
    <div className='h-full w-full relative bg-transparent '>
      <div className='absolute top-0 right-0 w-1/5 h-1/3 '>   
      </div>
    </div>
  )
}

export default ProfileHomePage