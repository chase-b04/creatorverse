import { useRoutes, Link } from "react-router-dom";

import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ShowCreators />,
    },
    {
      path: "/creator/:id",
      element: <ViewCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/new",
      element: <AddCreator />,
    },
  ]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/new">Add Creator</Link>
      </nav>

      <hr />

      {routes}
    </div>
  );
}

export default App;