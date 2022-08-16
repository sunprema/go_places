import { Carousel, Empty, Button, Badge, Timeline } from 'antd'
import React from 'react'

import { CalendarOutlined, CommentOutlined, InfoCircleFilled, SmileOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Col, Row } from 'antd';

const { TabPane } = Tabs;



const operations = <Button type='primary'>Add to Bucket List!</Button>;

const LocationDetail = ( props ) => {
  let { place} = props; 
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
                Services
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