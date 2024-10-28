// Blog.js
import { grey } from '@mui/material/colors';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const blogPosts = [
    {
        id: 1,
        title: "Harnessing Technology for Business Growth",
        date: "October 19, 2024",
        content: "In today's fast-paced world, technology is an essential component of business strategy. Companies leveraging technology can streamline operations, enhance customer experiences, and drive growth. This article explores the latest tools and trends in technology that can help businesses thrive."
    },
    {
        id: 2,
        title: "Strategic Planning in Uncertain Times",
        date: "October 15, 2024",
        content: "In times of uncertainty, effective strategic planning is critical for business success. This article outlines key strategies for adapting to market changes, understanding risks, and creating resilient business plans."
    },
    {
        id: 3,
        title: "The Future of Remote Work: Trends and Tools",
        date: "October 10, 2024",
        content: "Remote work is here to stay. This blog post discusses the evolving landscape of remote work, highlighting essential tools, technologies, and strategies to keep teams connected and productive."
    },
    {
        id: 7,
        title: "Leveraging Data Analytics for Strategic Decision Making",
        date: "November 10, 2024",
        content: "Highlight the importance of data analytics in driving business strategies and improving outcomes."
      },
      {
        id: 8,
        title: "Digital Transformation: Navigating Change in the Modern Workplace",
        date: "November 15, 2024",
        content: "Discuss the steps businesses can take to successfully implement digital transformation initiatives."
      },
      {
        id: 9,
        title: "Enhancing Customer Experience with Technology",
        date: "November 20, 2024",
        content: "Explore tools and strategies that companies can use to improve customer satisfaction and loyalty."
      },
      {
        id: 10,
        title: "Future-Proofing Your Business: Strategies for Long-Term Success",
        date: "November 25, 2024",
        content: "Offer insights on how businesses can adapt and thrive in an ever-changing market landscape."
      },
      {
        id: 11,
        title: "The Impact of 5G Technology on Business Operations",
        date: "December 1, 2024",
        content: "Analyze how 5G technology is reshaping industries and enabling faster, more efficient operations."
      },
      {
        id: 12,
        title: "Building a Culture of Innovation in Your Organization",
        date: "December 5, 2024",
        content: "Share tips on fostering a creative environment that encourages innovation and collaboration among employees."
      },
      {
        id: 13,
        title: "Remote Leadership: Strategies for Managing Distributed Teams",
        date: "December 10, 2024",
        content: "Discuss the skills and techniques needed to effectively lead and motivate remote teams."
      },
];

const Blog = () => {
    return (
        <div style={{ backgroundColor: "#f8f8fb" }}>
        <Container>
          <Row>
            <Col>
              <div className="blog-container" style={{ marginTop: "12vh" }}>
                <div className="blog-posts">
                  {blogPosts.map(post => (
                    <div className="blog-card mt-4" key={post.id}>
                    <Card className='border-0 shadow'>
                      <Card.Header  style={{background:"grey" ,color:"white"}}>
                      <h4>{post.title}</h4>
                      </Card.Header>
                      <Card.Body>
                      <h5 className="date">{post.date}</h5>
                      <h6>{post.content}</h6>
                      </Card.Body>
                      <Card.Footer className='text-end'>
                      <a href="#" className="read-more text-decoration-none">Read More</a>
                      </Card.Footer>
                    </Card>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Blog;
