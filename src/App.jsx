// import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import DailyDeals from "./pages/DailyDeals.jsx";
// import Products from "./pages/Products.jsx";
// import PhonesPage from "./pages/Phones.jsx";
// import HotAndNew from "./pages/HotAndNew.jsx";
// import Support from "./pages/Support.jsx";
// import AccessoriesPage from "./pages/Accessories.jsx";
// import PowerBankPage from "./pages/PowerBanks.jsx";
// import LatestLaunchesPages from "./pages/LatestLaunches.jsx";
// import TrendPage from "./pages/Trend.jsx";
// import HelpCenterPage from "./pages/HelpCenter.jsx";
// import WarrantyPage from "./pages/Warranty.jsx";
// import ContactUsPage from "./pages/ContactUs.jsx";
// import ViewPdfPage from "./pages/ViewPdf.jsx";
// import DownloadPdfPage from "./pages/DownloadPdf.jsx";
// import SearchProductsPage from "./pages/SearchProducts.jsx";
// import SearchSupportPage from "./pages/SearchSupport.jsx";
// import CartPage from "./pages/Cart.jsx";
// import CheckoutPage from "./pages/Checkout.jsx";
// import ProfilePage from "./pages/Profile.jsx";
// import OrdersPage from "./pages/Orders.jsx";
// import LogoutPage from "./pages/Logout.jsx";
// import LoginPage from "./pages/Login.jsx"

// // import ThemeToggleButton from "./components/ThemeToggleButton.jsx";
// import { ThemeProvider, useThemeContext } from "./hooks/ThemeContext.jsx";

// function AppContent() {
//   const { theme } = useThemeContext();

//   useEffect(() => {
//     const root = window.document.documentElement;

//     if (theme === "dark") {
//       root.classList.add("dark");
//       root.style.backgroundColor = "#000"; // dark background
//     } else {
//       root.classList.remove("dark");
//       root.style.backgroundColor = "#fff"; // light background
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-300 ${
//         theme === "dark" ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <Navbar />

//       {/* <div className="flex justify-end p-4">
//         <ThemeToggleButton />
//       </div> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/oraimo-daily-deals" element={<DailyDeals />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/phones" element={<PhonesPage />} />
//         <Route path="/products/accessories" element={<AccessoriesPage />} />
//         <Route path="/products/power" element={<PowerBankPage />} />
//         <Route path="/hot-and-new" element={<HotAndNew />} />
//         <Route path="/hot-and-new/latest" element={<LatestLaunchesPages />} />
//         <Route path="/hot-and-new/trending" element={<TrendPage />} />
//         <Route path="/support" element={<Support />} />
//         <Route path="/support/help" element={<HelpCenterPage />} />
//         <Route path="/support/warranty" element={<WarrantyPage />} />
//         <Route path="/support/contact" element={<ContactUsPage />} />
//         <Route path="/pdf/view" element={<ViewPdfPage />} />
//         <Route path="/pdf/download" element={<DownloadPdfPage />} />
//         <Route path="/search/products" element={<SearchProductsPage />} />
//         <Route path="/search/support" element={<SearchSupportPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/orders" element={<OrdersPage />} />
//         <Route path="/logout" element={<LogoutPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import { ThemeProvider, useThemeContext } from "./hooks/ThemeContext.jsx";

// import Home from "./pages/Home";
// import DailyDeals from "./pages/DailyDeals.jsx";
// import Products from "./pages/Products.jsx";
// import PhonesPage from "./pages/Phones.jsx";
// import HotAndNew from "./pages/HotAndNew.jsx";
// import Support from "./pages/Support.jsx";
// import AccessoriesPage from "./pages/Accessories.jsx";
// import PowerBankPage from "./pages/PowerBanks.jsx";
// import LatestLaunchesPages from "./pages/LatestLaunches.jsx";
// import TrendPage from "./pages/Trend.jsx";
// import HelpCenterPage from "./pages/HelpCenter.jsx";
// import WarrantyPage from "./pages/Warranty.jsx";
// import ContactUsPage from "./pages/ContactUs.jsx";
// import ViewPdfPage from "./pages/ViewPdf.jsx";
// import DownloadPdfPage from "./pages/DownloadPdf.jsx";
// import SearchProductsPage from "./pages/SearchProducts.jsx";
// import SearchSupportPage from "./pages/SearchSupport.jsx";
// import CartPage from "./pages/Cart.jsx";
// import CheckoutPage from "./pages/Checkout.jsx";
// import ProfilePage from "./pages/Profile.jsx";
// import OrdersPage from "./pages/Orders.jsx";
// import LogoutPage from "./pages/Logout.jsx";
// import LoginPage from "./pages/Login.jsx";
// import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

// import Layout from "./components/Layout.jsx";

// function AppContent() {
//   const { theme } = useThemeContext();

//   useEffect(() => {
//     const root = window.document.documentElement;

//     if (theme === "dark") {
//       root.classList.add("dark");
//       root.style.backgroundColor = "#000";
//     } else {
//       root.classList.remove("dark");
//       root.style.backgroundColor = "#fff";
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <div
//       className={`transition-colors duration-300 ${
//         theme === "dark" ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/oraimo-daily-deals" element={<DailyDeals />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/phones" element={<PhonesPage />} />
//           <Route path="/products/accessories" element={<AccessoriesPage />} />
//           <Route path="/products/power" element={<PowerBankPage />} />
//           <Route path="/hot-and-new" element={<HotAndNew />} />
//           <Route path="/hot-and-new/latest" element={<LatestLaunchesPages />} />
//           <Route path="/hot-and-new/trending" element={<TrendPage />} />
//           <Route path="/support" element={<Support />} />
//           <Route path="/support/help" element={<HelpCenterPage />} />
//           <Route path="/support/warranty" element={<WarrantyPage />} />
//           <Route path="/support/contact" element={<ContactUsPage />} />
//           <Route path="/pdf/view" element={<ViewPdfPage />} />
//           <Route path="/pdf/download" element={<DownloadPdfPage />} />
//           <Route path="/search/products" element={<SearchProductsPage />} />
//           <Route path="/search/support" element={<SearchSupportPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/orders" element={<OrdersPage />} />
//           <Route path="/logout" element={<LogoutPage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//         <ScrollToTopButton />
//       </Layout>
//       {/* <ScrollToTopButton /> */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider, useThemeContext } from "./hooks/ThemeContext.jsx";
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
import ViewPdfPage from "./pages/ViewPdf.jsx";
import DownloadPdfPage from "./pages/DownloadPdf.jsx";
import SearchProductsPage from "./pages/SearchProducts.jsx";
import SearchSupportPage from "./pages/SearchSupport.jsx";
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

function AppContent() {
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
          <Route path="/pdf/view" element={<ViewPdfPage />} />
          <Route path="/pdf/download" element={<DownloadPdfPage />} />
          <Route path="/search/products" element={<SearchProductsPage />} />
          <Route path="/search/support" element={<SearchSupportPage />} />
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;