import "./Benifits.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";

const data = [
    {
        "id":"key1",
        "icon": "fa fa-check",
        "title": "Interior Sketch",
        "desc": "There are many  variations of passages of Lorem Ipsum availiable, but the majority have suffered"
    },
    {
        "id":"key2",
        "icon": "fa fa-check",
        "title": "Interior Sketch",
        "desc": "There are many  variations of passages of Lorem Ipsum availiable, but the majority have suffered"
    },
    {
        "id":"key3", 
        "icon": "fa fa-check",
        "title": "Interior Sketch",
        "desc": "There are many  variations of passages of Lorem Ipsum availiable, but the majority have suffered"
    },

];
const List = (allData) => {
    const design = (
        <div className="d-flex mb-4">
            <div>
                <div className="icon-box d-flex justify-content-center align-items-center ">
                    <i className={allData.listData.icon}></i>
                </div>
            </div>
            <div className="px-3">
                <h6>{allData.listData.title}</h6>
                <p>{allData.listData.desc}</p>
            </div>
        </div>
    );
    return design;
}
const Benifits = () => {
    const desing = (
      <div style={{background:"#f8f8fb"}}>
          <Container >
            <Row>
                <Col md  className="px-4 d-flex flex-column justify-content-center">
                    {
                        data.map((item) => {
                            return <List listData={item} key={item.id} />
                        })
                    }
                </Col>
                <Col md className="px-4 ">
                    <img src="image-3.jpg" width="80%" className="rounded-circle man-pic" />
                </Col>
            </Row>
        </Container>
      </div>
    );
    return desing;
}
export default Benifits;