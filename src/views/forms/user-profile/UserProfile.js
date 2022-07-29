import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CLink,
  CRow,
} from '@coreui/react'
import img from 'src/assets/images/avatars/8.jpg'
import img1 from 'src/assets/images/company.jpg'
const UserProfile = () => {
  const user = localStorage.getItem('name')
  return (
    <div>
      {user === 'Organization' && (
        <CCard style={{ width: '70%', margin: 'auto', height: 'auto' }}>
          <CCardImage
            className=" mt-3  mb-3 mx-auto"
            style={{ height: '25%', width: '25%' }}
            src={img1}
          />
          <CCardBody>
            <CCardTitle>World Team</CCardTitle>
            {/* <CCardText>Church description goes here as a full of para</CCardText> */}
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <a href="mailto:abc@gmail.com">abc@gmail.com</a>
            </CListGroupItem>
            <CListGroupItem>Bridgeport</CListGroupItem>
            <CListGroupItem>Hamilton Township</CListGroupItem>
            <CListGroupItem>NJ</CListGroupItem>
            <CListGroupItem>08501</CListGroupItem>
            <CListGroupItem>874-852-4563</CListGroupItem>
            <CListGroupItem>987-423-0981</CListGroupItem>
            <CListGroupItem>03-12-2019</CListGroupItem>
            <CListGroupItem>
              <a href="https://www.greaterbergen.org/" target="_blank" rel="noreferrer">
                https://www.greaterbergen.org/
              </a>
            </CListGroupItem>
          </CListGroup>

          <CCardBody className="gap-1 d-md-flex justify-content-md-center">
            <Link to="/forms/organization-form">
              <CButton className="btn btn-primary">Edit</CButton>
            </Link>

            <span> </span>
            <Link to="/forms/user-contribution-table">
              <CButton className="btn btn-primary">Cancel</CButton>
            </Link>
            {/* <CCardLink href="#">Another link</CCardLink> */}
          </CCardBody>
        </CCard>
      )}
      {user === 'Individual' && (
        <CCard style={{ width: '70%', margin: 'auto', height: 'auto' }}>
          <CCardImage
            className=" mt-3  mb-3 mx-auto"
            style={{ height: '25%', width: '25%' }}
            src={img}
          />
          <CCardBody>
            <CCardTitle>Amelia</CCardTitle>
            {/* <CCardText>Church description goes here as a full of para</CCardText> */}
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <a href="mailto:amelia@gmail.com">amelia@gmail.com</a>
            </CListGroupItem>
            <CListGroupItem>Buena Vista</CListGroupItem>
            <CListGroupItem>Mauna Lani</CListGroupItem>
            <CListGroupItem>Kohala coast</CListGroupItem>
            <CListGroupItem>CA</CListGroupItem>
            <CListGroupItem>96753</CListGroupItem>
            <CListGroupItem>217-514132</CListGroupItem>
            <CListGroupItem>123-456-7898</CListGroupItem>
            <CListGroupItem>Female</CListGroupItem>
          </CListGroup>

          <CCardBody className="gap-1 d-md-flex justify-content-md-center">
            <Link to="/forms/form-control">
              <CButton className="btn btn-primary">Edit</CButton>
            </Link>

            <span> </span>
            <Link to="/forms/user-contribution-table">
              <CButton className="btn btn-primary">Cancel</CButton>
            </Link>
            {/* <CCardLink href="#">Another link</CCardLink> */}
          </CCardBody>
        </CCard>
      )}
    </div>
  )
}

export default UserProfile
