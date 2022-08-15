import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    GlobalOutlined,
    OrderedListOutlined,
    VideoCameraOutlined,
    EnvironmentOutlined,
  } from '@ant-design/icons';

import { Layout, Menu, Image, Segmented } from 'antd';
import React, { useState } from 'react';
import "./Main.css"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { Col, Row } from 'antd';
import { Explore, BucketList, TopPlaces, Upload  } from './pages';
import { useSelector, useDispatch } from 'react-redux';
import {segment_places} from './store/placesDataSlice';
const { Header, Sider, Content } = Layout;


const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('explore');
    const dispatch = useDispatch()
    const onMenuChange = ( e ) => {
        setSelectedMenu(e.key);
    }

    const onSegmentChange = ( value ) => {
      dispatch(segment_places( value));
    }

    return (
      <BrowserRouter>
      <Header theme="dark"><Image src="./images/go_places.png" preview={false} alt="Go Places!"/></Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            onClick = {onMenuChange}
            defaultSelectedKeys={[ selectedMenu ]}
            items={[
              {
                key: 'explore',
                icon: <GlobalOutlined /> ,
                label: (<Link to='/explore'>Explore </Link>),
              },
              {
                key: 'my_bucket_list',
                icon: <OrderedListOutlined />,
                label: (<Link to='/bucketList'>My bucket list </Link>),
              },
              {
                key: 'top_places',
                icon: <EnvironmentOutlined />,
                label: (<Link to='/topPlaces'>Top places!</Link>),
              },
              {
                key: 'upload',
                icon: <VideoCameraOutlined/>,
                label: (<Link to='/upload'>upload</Link>),
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            
            <Row>
            <Col span={8}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            </Col>
            <Col span={16}>
              <Segmented options={["Spectacular","Beaches", "Mountains", "Adventure", "Religious", "Architecture", "Ancient", "Cities"]} onChange={onSegmentChange} />
            </Col>
            </Row>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          > 
            <Routes>
              <Route path="/explore" element={<Explore/>} />                              
              <Route path="/bucketList" element={<BucketList />} />                
              <Route path="/topPlaces" element={<TopPlaces />} /> 
              <Route path="/upload" element={<Upload />} />               
              <Route exact path="/" element={<Navigate to ='/explore' />}/> 
            </Routes>
            
          </Content>
        </Layout>
      </Layout>
      </BrowserRouter>
    );
  };

  export default Main;