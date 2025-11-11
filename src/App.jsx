import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useThemeContext } from "./hooks/ThemeContext.jsx"; 
import Home from "./pages/Home";
import DailyDeals from "./pages/DailyDeals.jsx";
import Products from "./pages/Products.jsx";
import PhonesPage from "./pages/Phones.jsx";
import HotAndNew from "./pages/HotAndNew.jsx";
import Support from "./pages/Support.jsx";
import AccessoriesPage from "./pages/Accessories.jsx";
import PowerBankPage from "./pages/PowerBanks.jsx";
import LatestLaunchesPages from "./pages/LatestLaunches.jsx";
import TrendPage from "./pages/Trend.jsx";
import HelpCenterPage from "./pages/HelpCenter.jsx";
import WarrantyPage from "./pages/Warranty.jsx";
import ContactUsPage from "./pages/ContactUs.jsx";
import CartPage from "./pages/Cart.jsx";
import CheckoutPage from "./pages/Checkout.jsx";
import ProfilePage from "./pages/Profile.jsx";
import OrdersPage from "./pages/Orders.jsx";
import LogoutPage from "./pages/Logout.jsx";
import LoginPage from "./pages/Login.jsx";
import ShopPage from "./pages/Shop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Layout from "./components/Layout.jsx";
import Spinner from "./components/Spinner.jsx";
function App() {
  const { theme } = useThemeContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.style.backgroundColor = "#000";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#fff";
    }

    localStorage.setItem("theme", theme);

    // Simulate initial page load delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [theme]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oraimo-daily-deals" element={<DailyDeals />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/phones" element={<PhonesPage />} />
          <Route path="/products/accessories" element={<AccessoriesPage />} />
          <Route path="/products/power" element={<PowerBankPage />} />
          <Route path="/hot-and-new" element={<HotAndNew />} />
          <Route path="/hot-and-new/latest" element={<LatestLaunchesPages />} />
          <Route path="/hot-and-new/trending" element={<TrendPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/help" element={<HelpCenterPage />} />
          <Route path="/support/warranty" element={<WarrantyPage />} />
          <Route path="/support/contact" element={<ContactUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop/:id" element={<ShopPage />} />
        </Routes>
        <ScrollToTopButton />
      </Layout>
    </div>
  );
}

export default App;
