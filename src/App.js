import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from "react-query";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import './App.css';
import { RQSuperHero } from "./components/RQSuperHero";
import { ParallelQueries } from "./components/ParallelQueries";
import { DependentQueries } from "./components/DependentQueries.page";



const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<HomePage />}>
            </Route>
            <Route exact path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
            <Route exact path="/rq-parallel" element={<ParallelQueries heroIds = {[1,3]} />} />
            <Route exact path="/rq-dependent" element={<DependentQueries email = 'aditijainjnv101@gmail.com' />} />
            <Route exact path="/super-heroes" element={<SuperHeroesPage />}>
            </Route>
            <Route exact path="/rq-super-heroes" element={<RQSuperHeroesPage />}>
            </Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
