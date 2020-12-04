import './App.css';
import Title from './Components/Title/Title';
import Subtitle from './Components/Subtitle/Subtitle';
import TextParagraph from './Components/TextParagraph/TextParagraph';

function App() {
  return (
    <div className="App">
      <Title title="The creative crew"/>
      <Subtitle subtitle="Who we are" />
      <TextParagraph />
    </div>
  );
}

export default App;