import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import AboutMeComponent from "../components/AboutMeComponent";
import ContactMeComponent from "../components/ContactMeComponent";
import SkillsComponent from "../components/SkillsComponent";
import { MerchComponent } from "../components/MerchComponent";

// const setSessionExpiration = () => {
//   let expired = window.localStorage.getItem("expire");
//   if (new Date().getTime() > expired && expired != null) {
//     window.localStorage.clear();
//     failedMessage("Logged Out due to Inactivity");
//     return false;
//   } else {
//     const time = new Date();
//     let hour = 1 * 60 * 60 * 1000;
//     window.localStorage.setItem("expire", time.getTime() + hour);
//     return true;
//   }
// };

// const checkRedirect = (token, path, redirect_path, navigate, redirect) => {
//   if (token != null) {
//     if (!path.includes(redirect_path) && path !== "/") {
//       navigate(redirect_path);
//     }
//   } else {
//     const allowed = allowed_paths.some((substring) => path.includes(substring));
//     if (allowed === true) {
//       redirect = true;
//     }
//     if (!redirect) navigate("/");
//   }
// };

const MainRouter = () => {

  return (
    <>
      <Routes>
        <Route
          exact path="/"
          element={<AboutMeComponent/>}
        />
        <Route
          exact path="/skills"
          element={<SkillsComponent/>}
        />
        <Route
          exact path="/merch"
          element={<MerchComponent/>}
        />
        {/* <Route
          exact path="/aspirations"
          element={<BucketListComponent/>}
        /> */}
        <Route
          exact path="/contactme"
          element={<ContactMeComponent/>}
        />
        {/* 404 PAGE: WHEN ROUTES AREN'T DEFINE */}
        {/* <Route
          path="*"
          element={
            <>
              <FourOfourPage />
            </>
          }
        /> */}
      </Routes>
    </>
  );
};

export default MainRouter;
