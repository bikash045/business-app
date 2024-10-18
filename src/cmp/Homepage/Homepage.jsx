import Bigadd from "./Bigadd/Bigadd";
import Category from "./Category/Category";
import Benifits from "./Benifits/Benifits";
import Course from "../Courses/Course";
import ContactUs from "./ContactUs/ContactUs";
import Blog from "../Blog/Blog";

const Homepage = () => {
    const desing = (
        <>
         <Bigadd />
        <div style={{backgroundColor:"#f8f8fb"}}> 
        <Category />
        <Benifits />
        <Course />
        <Blog />
        <ContactUs /> 
        </div>
        </>
    );
    return desing;
}
export default Homepage;