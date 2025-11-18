import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme/theme";
import Layout from "./components/Layout";
import Support from "./pages/Support";
import Marketing from "./pages/Marketing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutos
    },
  },
});
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Marketing />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/support" element={<Support />} />
              <Route path="/marketing" element={<Marketing />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
      {/* DevTools opcional - ajuda a debugar */}
    </QueryClientProvider>

  );
}

export default App;
