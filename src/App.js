import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import ProductsListPage from "./pages/ProductsListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserCartPage from "./pages/UserCartPage";
import categories from "./categories";
import users from "./users";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import UsersListPage from "./pages/admin_pages/UsersListPage";
import CategoriesListPage from "./pages/admin_pages/CategoriesListPage";
import AddCategoryPage from "./pages/admin_pages/AddCategoryPage";
import AddUserPage from "./pages/admin_pages/AddUserPage";
import AdminProductsListPage from "./pages/admin_pages/AdminProductsListPage";
import AddProductPage from "./pages/admin_pages/AddProductPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route
              path='/login'
              element={<LoginPage />}
            />
            <Route
              path='/'
              element={<ProductsListPage />}
            />
            <Route
              path='/product/:productId'
              element={<ProductPage />}
            />
            <Route
              path='/signup'
              element={<SignupPage />}
            />
            <Route
              path='/categories'
              element={<CategoriesListPage />}
            />
            <Route
              path='/categories/create'
              element={<AddCategoryPage />}
            />
            <Route
              path='/profile'
              element={<UserProfilePage />}
            />
            <Route
              path='/users'
              element={<UsersListPage />}
            />
            <Route
              path='/users/create'
              element={<AddUserPage />}
            />
            <Route
              path='/products'
              element={<AdminProductsListPage />}
            />
            <Route
              path='/products/create'
              element={<AddProductPage />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
