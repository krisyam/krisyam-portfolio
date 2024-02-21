import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutMeComponent from '../components/AboutMeComponent'
import ContactMeComponent from '../components/ContactMeComponent'
import SkillsComponent from '../components/SkillsComponent'
import { MerchComponent } from '../components/MerchComponent'
// import MyAcademyPrivacyPolicy from "../components/policies/myAcademyPrivacyPolicy";
import ProjectsComponent from '../components/projects/ProjectsComponent'
import PrivacyPolicyComponent from '../components/policies/PrivacyPolicyComponent'
import BucketListComponent from '../components/BucketListComponent'
// import Home from "../components/Home";

const MainRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route
          exact path="/"
          element={<Home/>}
        /> */}
                <Route exact path="/" element={<AboutMeComponent />} />
                <Route path="/aboutme" element={<AboutMeComponent />} />
                <Route path="/skills" element={<SkillsComponent />} />
                <Route path="/projects" element={<PrivacyPolicyComponent />}>
                    <Route
                        path="/projects/:name"
                        element={<ProjectsComponent />}
                    />
                    <Route
                        path="/projects/:name/privacy_policy"
                        element={<PrivacyPolicyComponent />}
                    />
                </Route>
                <Route path="/merch" element={<MerchComponent />} />
                <Route path="/aspirations" element={<BucketListComponent />} />
                <Route path="/contactme" element={<ContactMeComponent />} />
                <Route path="/hidden" element={<ContactMeComponent />} />
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
    )
}

export default MainRouter
