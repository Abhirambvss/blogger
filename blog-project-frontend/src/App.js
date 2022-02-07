import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import ArticlesList from './pages/ArticlesList'
import Article from './pages/Article'
import NavBar from './components/navBar';
import NotFound from './pages/notFound';


function App() {
  return (

    <Router>
    <div className='m-auto'>
    <NavBar/>
    <Routes>
    
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/articles-list" element={<ArticlesList/>}/>
      <Route exact path="/articles" element={<Article/>} >
        <Route exact path=":name" element={<ArticlesList/>} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    
    </Routes>
    </div>
  </Router>
  );
}

export default App;
