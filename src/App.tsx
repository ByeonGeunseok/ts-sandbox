import './App.css';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import { HandleCsv } from './pages/HandleCsv';
import { HandleJson } from './pages/HandleJson';

function App() {
  return (
    <div className="App">
      <Tabs defaultValue={1}>
        <TabsList>
          <Tab value={1}>One</Tab>
          <Tab value={2}>Two</Tab>
          <Tab value={3}>Three</Tab>
        </TabsList>
        <TabPanel value={1}>First page</TabPanel>
        <TabPanel value={2}>{HandleCsv()}</TabPanel>
        <TabPanel value={3}>{HandleJson()}</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
