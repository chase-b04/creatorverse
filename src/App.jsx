import { useRoutes, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import { supabase } from "./client";
import "./App.css";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    };
    
    fetchCreators();
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ShowCreators creators={creators} />
      ),
    },
    {
      path: "/creator/:name",
      element: <ViewCreator />,
    },
    {
      path: "/edit/:name",
      element: <EditCreator />,
    },
    {
      path: "/new",
      element: <AddCreator />,
    },
  ]);

  return <div>{routes}</div>;
}

export default App;