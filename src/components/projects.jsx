import React from 'react'
import { CCardFooter, CCard, CCardImage, CCardBody, CCardText, CButton, CRow, CCol, CCardHeader} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'


//Exports projects page.
export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className = "cards">
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        <CCol xs>
          <CCard className="text-center h-100">
            <CCardHeader className="personalWebsiteTitle">
              <h3>Personal Website</h3>
              </CCardHeader>
            <CCardBody className="personalWebsiteBody">
              <CCardText>
                  This is my personal website/portfolio created in React. It's fully customizable, dynamic and changes can be made easily. 
                  Component libraries such as CoreUI and React-Type-Animation were used.
              </CCardText>
            </CCardBody>
            <CCardFooter className="personalWebsiteFooter">
              <CButton color="info" variant="outline">GitHub</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="text-center h-100">
            <CCardHeader className="foodFinderTitle">
              <h3>Food Finder</h3>
              </CCardHeader>
            <CCardBody className="foodFinderBody">
              <CCardText>
                Food Finder is a web-app that provides a user random suggestions for dishes. If the user likes the dish, they "swipe right"
                and saves recipes for that dish into a database. If they swipe left it'll provide a new suggestion.       
              </CCardText>
            </CCardBody>
            <CCardFooter className="foodFinderFooter">
              <CButton color="info" variant="outline" href="https://github.com/BryanNghiTruong/food-finder" target='_blank'>GitHub</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="text-center h-100" > 
              <CCardHeader className="videoStreamingServiceTitle">
                <h3>Video Streaming Service</h3>
              </CCardHeader>
            <CCardBody className="videoStreamingServiceBody">
              <CCardText>
                The Video Streaming Service allows for a user to upload a video and stream it. The video is saved on a MySQL instance and the project
                was built with Docker. It utilizes 5 different key services. A MySQL service, a simple authentication and filesystem made with Python, 
                a video streaming and video upload service made with node.js.
              </CCardText>
            </CCardBody>
            <CCardFooter className = "videoStreamingServiceFooter">
              <CButton color="info" variant="outline">GitHub</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="text-center h-100"> 
            <CCardHeader className="expenseSharingAppTitle">
              <h3>Expense Sharing App</h3>
              </CCardHeader>
            <CCardBody className="expenseSharingAppBody">
              <CCardText>
                The Expense Sharing App allows for a group of friends or family to split expenses in multiple ways. 
                It allows for users to calculate how much each person should contribute towards shared expenses.
                The app utilizes React and Bootstrap. 
              </CCardText>
            </CCardBody>
            <CCardFooter className="expenseSharingAppFooter">
              <CButton color="info" variant="outline">GitHub</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        </CRow>
      </div>
    </div>
  )
}

