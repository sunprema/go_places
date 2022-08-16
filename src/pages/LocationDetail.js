import { Carousel, Empty, Button, Badge, Timeline, Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { CalendarOutlined, CommentOutlined, InfoCircleFilled, SmileOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {Amplify, API} from 'aws-amplify';
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

const { TabPane } = Tabs;
const { Meta } = Card;
const operations = <Button type='primary'>Add to Bucket List!</Button>;

const myAPI = "goservices"
const path="/services"

//https://dfp9u6ub0l.execute-api.us-east-1.amazonaws.com/dev
const LocationDetail = ( props ) => {
  let { place} = props; 
  const [services, setServices] = useState(null);
  useEffect( () => {
    API.get(myAPI, path +"/123")
       .then(response => {
           console.log(response);
           setServices( response );
       })
       .catch(error => {
           console.log(error);
       })

  },[])
  if (place === null){
      return <Empty description="Place data is not available"></Empty>
  }   
  const weatherSrc = `https://forecast.io/embed/#lat=${place.lat}&lon=${place.lng}&color=#496a4d&font=Arial&units=us`
  console.log(weatherSrc)

  

  return (
    <>
    <Row gutter={[32,16]}>
        <Col span={12}>
            <iframe width="100%"
                frameBorder="0"
                allowFullScreen                
                height="700px"            
                src= {place.src}>
            </iframe>
        </Col>
        <Col span={12}>
            <Tabs defaultActiveKey="details" tabBarExtraContent={operations} >
                <TabPane
                    tab={
                        <span>
                        <InfoCircleFilled />
                        Details - {place.lat} , {place.lng}
                        </span>
                    }
                    key="details"
                >
                <iframe id="forecast_embed"
                        key={`${place.lat}-${place.lng}`} 
                        type="text/html" 
                        frameBorder="0" 
                        height="245" 
                        width="100%" 
                        src={weatherSrc}> 
                </iframe>
                
                </TabPane>
                <TabPane
                    tab={
                        <span>
                        <CalendarOutlined />
                        Events
                        </span>
                    }
                    key="events"
                >
                <Timeline mode="left">
                    <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
                    <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                    <Timeline.Item>Technical testing</Timeline.Item>
                    <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                </Timeline>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                        <CustomerServiceOutlined />
                        Services
                        </span>
                    }
                    key="services"
                >
                <Row gutter={16}>        
                {
                    services != null && 
                    services.services.map( service => 
                        <Col span={8}>
                        <Card 
                        hoverable
                        style={{
                            width:240
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                        <Meta title={service.name} description={service.description} />
                        
                        </Card>
                        </Col>
                )   
                }
                </Row>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                        <CommentOutlined  />
                        Comments
                        </span>
                    }
                    key="comments"
                >
                Comments
                </TabPane>
                <TabPane
                    tab={
                        <span>
                        <SmileOutlined />
                        Feeling Lucky!
                        <Badge count={5} style={{
                               backgroundColor: '#52c41a',
                               marginLeft:'8px',
                        }}/>
                        </span>
                    }
                    key="feelingLucky"
                >
                Feeling Lucky!
                </TabPane>
            </Tabs>

        </Col>

    </Row>     
    </>
  )
}

export default LocationDetail