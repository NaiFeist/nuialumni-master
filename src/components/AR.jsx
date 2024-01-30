import Dashboard from './Dashboard'
import EjAR from './ar/EjAR'
import ARNaiara from './ARNaiara'; 
import { Route, Switch } from 'react-router-dom';


function AR() {
    return (
        <> 
        <Dashboard/>
        <EjAR />
        </>
    );
  }
  
  export default AR;