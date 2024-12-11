import "./css/global.css";
import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';

import CustomRouter from "./route/route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/root-store";
import { Toaster } from "sonner";
import { ErrorBoundary } from 'react-error-boundary';
import SomethingWentWrong from './pages/ErrorScreen/SomethingWentWrong';
import { MeetingProvider } from './context/MeetingContext';
import BotShop from "./pages/BotShop/BotShop";
import Waitlist from "./pages/Waitlist";

function App() {
  // usePreventZoom();
  // useResetZoom();

  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<SomethingWentWrong />}>
        <Toaster richColors />
        <Provider store={store}>
          <MeetingProvider>
            <CustomRouter />
            <Routes>
              <Route path="/botshop" element={<BotShop />} />
              <Route path="/waitlist" element={<Waitlist />} />
              
            </Routes>
          </MeetingProvider>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
