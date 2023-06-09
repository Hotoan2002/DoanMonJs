import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProduct = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProduct);
    }

    if (filterValue === "mobile") {
      const filteredProduct = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredProduct);
    }

    if (filterValue === "chair") {
      const filteredProduct = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProduct);
    }

    if (filterValue === "watch") {
      const filteredProduct = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredProduct);
    }

    if (filterValue === "wireless") {
      const filteredProduct = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredProduct);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col log="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col log="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col log="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search ........"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
