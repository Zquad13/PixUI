import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button"
import AppRoutes from "../src/Routes/AppRoute";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
