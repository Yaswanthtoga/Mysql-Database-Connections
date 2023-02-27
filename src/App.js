import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Books/>
  },
  {
    path:"/update",
    element:<Update/>
  },
  {
    path:"/add",
    element:<Add/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
