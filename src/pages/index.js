import { useRouter } from "next/router";

function App() {
  const router = useRouter();
  router.replace("/diff"); // Redirect to /diff on load
}

export default App;
