import logo from './logo.svg';
import './App.css';
import Gallery from '../src/components/Gallery';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';


export default function App() {
 
   return (
    <>
    <div id = "form">
      <Gallery />
      <FullName />
      <Address />
    </div>
    
    </>
  );
 
}