import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Scanner from "./pages/Scanner";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Scanner />
    </QueryClientProvider>
  );
}

export default App;
