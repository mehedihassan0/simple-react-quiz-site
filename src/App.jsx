import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Topics from "./components/Topics/Topics";
import QuizGroup from "./components/QuizGroup/QuizGroup";
import Statics from "./components/Statics/Statics";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./Layout/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'',
          element:<Topics/>
        },
        {
          path:'quizGroup/:quizId',
          loader: async ({params})=>{
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<QuizGroup/>
        },
        {
          path:'statics',
          element:<Statics/>
        },
        {
          path:'contact',
          element:<Contact/>
        }
      ]
    }
  ])
  return (
  <div>
    <RouterProvider router={router} />
  </div>
  )
}

export default App;
