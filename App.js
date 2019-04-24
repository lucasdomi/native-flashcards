import Deck from './views/Deck';
import NewDeck from './views/NewDeck';
import DecksList from './views/ListDecks';
import QuizPage from './views/QuizPage';
import CreateQuestion from './views/CreateQuestion'
import { createStackNavigator,  createAppContainer} from 'react-navigation'

const MainNavigator = createStackNavigator({
  Home: {screen: DecksList},
  Deck: {screen: Deck},
  CreateDeck: {screen: NewDeck},
  QuizPage: {screen: QuizPage},
  AddQuestion: {screen: CreateQuestion},
});

const App = createAppContainer(MainNavigator)
export default App
