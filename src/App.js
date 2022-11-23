import './App.scss';
import { TextProvider } from './context';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  return (

    <TextProvider>
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    </TextProvider>
  );
}

export default App;
