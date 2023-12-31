import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/homepage/Home";
import Navigationbar from "./Components/Navbar-Footer/Navigationbar";
import Login from "./Components/Login-Enroll/Login";
import Enrollnow from "./Components/Login-Enroll/Enrollnow";
import Footer from "./Components/Navbar-Footer/Footer";
import FOF from "./Components/FourZeroFour/FOF";
import About from "./Components/Aboutpage/About";
import Contact from "./Components/Contactpage/Contact";
import Courses from "./Components/Our-My-Courses/Courses";
import Auth from "./Components/Login-Enroll/Auth";
// import Layout from './Components/Layout'
import Blogpage from "./Components/Blogs/Blogpage";

import Userprofile from "./Components/userprofileOld/Userprofile";
import Invoice from "./Components/userprofileOld/Invoice";
import PrintInvoice from "./Components/userprofileOld/PrintInvoice";
import Changeprofileimage from "./Components/userprofileOld/Changeprofileimage";
import Changepassword from "./Components/userprofileOld/Changepassword";
import Mycourses from "./Components/Our-My-Courses/Mycourses";

import AffiliateDashboard from "./Components/Affiliatepanel/AffiliateDashboard";
import Kyc from "./Components/Affiliatepanel/KYC/Kyc";
import Affiliates from "./Components/Affiliatepanel/Affiliates/Affiliates";
import Offer from "./Components/Affiliatepanel/Offer/Offer";
import Smartcommunity from "./Components/Affiliatepanel/SmartCommunity/SmartCommunity";
import Orientationstats from "./Components/Affiliatepanel/Orientation Stats/Orientationstats";
import MarketingTools from "./Components/Affiliatepanel/MarketingTools/MarketingTools";
import Training from "./Components/Affiliatepanel/Training/Training";
import Webinar from "./Components/Affiliatepanel/Webinar/Webinar";
import Leaderboard from "./Components/Affiliatepanel/Leaderboard/Leaderboard";

import Fp from "./Components/forgotpass/Fp";
import Fp2 from "./Components/forgotpass/Fp2";
import Coursepage from "./Components/Coursepage/Coursepage";
import ScrollToTop from "./ScrollToTop";
// import Cookies from 'js-cookie';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Privacy_policy from './Components/Terms&Conditions/PrivacyPolicy';
import Productslider2 from "./Components/product-slider/productslider2";
import PrivacyPolicy from "./Components/Terms&Conditions/PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/UserSlices";
import EditProfile from "./Pages/EditProfile";
import UpdateProfile from "./Components/userprofilesection/UpdateProfile";
import ProfilePublic from "./Components/userprofilesection/ProfilePublic";
import Subscription from "./Pages/Subscription";
import Whishlist from "./Pages/Whishlist";
import CourseDetails from "./Components/Our-My-Courses/CourseDetails";
import CartPage from "./Pages/CartPage";
// import SendOtp from "./Components/forgotpass/SendOtp.js";
// import ResetPassOtp from "./Components/forgotpass/ResetPassOtp";
function App() {
  const storedUserData = localStorage.getItem("userData");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    dispatch(setUser(userData));
  }
  return (
    <div>
      <>
        <Navigationbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productslider2" element={<Productslider2 />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogpage />} />
          <Route path="/userinvoice" element={<Invoice />} />
          <Route path="/printinvoice/:invoice_id" element={<PrintInvoice />} />
          <Route path="/changeprofilepic" element={<Changeprofileimage />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/mycourses" element={<Mycourses />} />
          <Route path="/affiliate-dashboard" element={<AffiliateDashboard />} />
          <Route path="/affiliate-kyc" element={<Kyc />} />
          <Route path="/affiliate-affiliates" element={<Affiliates />} />
          <Route path="/affiliate-offer" element={<Offer />} />
          <Route path="/affiliate-orientation" element={<Orientationstats />} />
          <Route
            path="/affiliate-smartcommunity"
            element={<Smartcommunity />}
          />
          <Route path="/affiliate-marketing" element={<MarketingTools />} />
          <Route path="/affiliate-training" element={<Training />} />
          <Route path="/affiliate-webinar" element={<Webinar />} />
          <Route path="/affiliate-leaderboard" element={<Leaderboard />} />
          <Route path="/coursepage/:courseid" element={<Coursepage />} />

          <Route path="/forgotpassword" element={<Fp />} />
          <Route path="/newpassword" element={<Fp2 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<FOF />} />
          <Route path="/enrollnow" element={<Enrollnow />} />
          <Route path="/course-details/:courseid" element={<CourseDetails />} />
          {user ? (
            <>
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/public-view-profile" element={<ProfilePublic />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/whishlist" element={<Whishlist />} />
              <Route path="/course-cart" element={<CartPage />} />
            </>
          ) : (
            <></>
          )}
        </Routes>
        <Footer />
      </>
    </div>
  );
}
export default App;
