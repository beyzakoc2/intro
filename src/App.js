import react from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  let productInfo = { title: "Product List" };
  let categoryInfo = { title: "Category List" };
  // let titleProduct = "Product List";
  // let titleCategory = "Category List"; title={titleCategory} şeklinde yazılır
  // ister tanımlayarak ister direkt "title=Category List" yazarak okunur hale getirebiliriz.
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
