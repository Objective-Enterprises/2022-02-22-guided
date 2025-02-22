import React from "react";
import { Table, Container, Button, Col } from "react-bootstrap";
/* CODE HERE */
import AlertMessage from "../../components/AlertMessage";

const CategoriesListPage = () => {
  const [categories, setCategories] = React.useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  const deleteHandler = (id) => {
    const categoriesListUpdated = categories.filter(
      (category) => category.id != id
    );
    setCategories(categoriesListUpdated);
  };

  return (
    <>
      {categories.length == 0 && (
        <AlertMessage variant="info" message="No category created" />
      )}
      {categories.length > 0 && (
        <Container>
          {/* CODE HERE */}
          <Button className="my-3">Add Category</Button>
          
          <Table striped hover bordered className="table-sm">
            <thead>
              <tr className="text-center">
                <th>Id</th>
                <th>Category Name</th>
                <th>Category Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id} className="text-center">
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <Col>
                      {/* CODE HERE */}
                      <Button variant="info" className="mb-3">
                        Edit
                      </Button>
          
                    </Col>
                   <Col>
                   <Button
                      variant="danger"
                      className="mb-3"
                      onClick={() => deleteHandler(category.id)}
                    >
                      Delete
                    </Button>
                   </Col>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default CategoriesListPage;
