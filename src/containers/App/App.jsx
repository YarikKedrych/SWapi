// import styles from './App.module.css';
import { getApiResource } from '../../utils/network';
import PeoplePage from '../PeoplePage/PeoplePage';

getApiResource()

const App = () => {
  return (
    <PeoplePage />
  )
}

export default App;