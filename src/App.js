import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import Dashboard from './scenes/dashboard';
import Topbar from '../src/scenes/global/Topbar';
import Sidebar from '../src/scenes/global/Sidebar';
import Team from '../src/scenes/team';
import Invoices from '../src/scenes/invoices';
import Contacts from '../src/scenes/contacts';
// import Bar from '../src/scenes/bar';
import Form from '../src/scenes/form';
// import Line from '../src/scenes/line';
// import Pie from '../src/scenes/pie';
// import Faq from '../src/scenes/faq';
// import Geography from '../src/scenes/geography';
// import Calendar from '../src/scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <Sidebar />

            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<Faq />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
