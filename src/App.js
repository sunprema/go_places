
import React,{useState} from "react";
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import moment from 'moment';

const App = () => {

  const [startDate, setStartDate] = useState(moment('2015-01-01', 'YYYY-MM-DD'));
  const showDate = () => {
    alert( startDate );
  }

  return (
    <div className="App">
      <h1>Go places!</h1>
      <Space>
      <DatePicker defaultValue={startDate} onChange={(newDate) => setStartDate(newDate) }/>
        <Button type="primary" onClick={ (e) => showDate()} > Primary Button</Button>
      </Space>
    </div>
  );
};

export default App;
