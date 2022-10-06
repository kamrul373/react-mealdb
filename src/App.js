import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Meals from "./Components/Meals/Meals";
import MealDetails from './Components/MealDetails/MealDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        {
          path: "/",
          loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c"),
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c"),
          element: <Home></Home>
        },
        {
          path: "/meals",
          loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"),
          element: <Meals></Meals>
        },
        {
          path: "/meals/:char",
          loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.char}`),
          element: <Meals></Meals>
        },
        {
          path: "/meal/:id",
          loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
          element: <MealDetails></MealDetails>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
