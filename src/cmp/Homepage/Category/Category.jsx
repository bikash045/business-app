import "./Category.css";
import categoryData from "../../../json-api/Category.json";
import {
    Container,
    Col,
    Row,
    Card
} from "react-bootstrap";




const Column = (data) => {
    const design = (
        <Col md className="px-4 mt-4 mt-md-0" >
            <Card className="border-0 shadow rounded"  >
                <Card.Body className="text-center py-4" >
                    <div className="icon d-flex justify-content-center align-items-center">
                        <i className={data.catData.icon} style={{fontSize:"50px"}}></i>
                    </div>
                    <Card.Title>{data.catData.title}</Card.Title>
                    <Card.Text>
                       {data.catData.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
    return design;
}

const Category = () => {
    const design = (
        <>
        <div style={{background:"#f8f8fa"}}>
        <Container className="cat-box">
                <Row>
                    {
                        categoryData.map((item) => {
                            return <Column catData={item} key={item.id} />
                        })
                    }
                </Row>
            </Container>
        </div>
           
        </>
    );
    return design;
}
export default Category;