import {createContext} from 'react';
import { doctors } from '../assets/assets';



export const Appcontext=createContext()


const Appcontextprovider =(props)=> {

  const currencysymbol='$'
  
  const value={
    doctors,currencysymbol
  }
  return(
  <Appcontext.Provider value={value}>
    {props.children}
    </Appcontext.Provider>
    )
}


export default Appcontextprovider