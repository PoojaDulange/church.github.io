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
import img from 'src/assets/images/user1.jpg'

const UserProfile = () => {
  const user = localStorage.getItem('name')
  return (
    <div>
      <CCard style={{ width: '70%', margin: 'auto', height: 'auto' }}>
        <CCardImage
          className=" mt-3  mb-3 mx-auto"
          style={{ height: '25%', width: '25%' }}
          src={img}
        />
        <CCardBody>
          <CCardTitle>User Name</CCardTitle>
          {/* <CCardText>Church description goes here as a full of para</CCardText> */}
        </CCardBody>
        <CListGroup flush>
          <CListGroupItem>Email</CListGroupItem>
          <CListGroupItem>Address 1</CListGroupItem>
          <CListGroupItem>Address 2</CListGroupItem>
          <CListGroupItem>City</CListGroupItem>
          <CListGroupItem>State</CListGroupItem>
          <CListGroupItem>Zipcode</CListGroupItem>
          <CListGroupItem>Tel No</CListGroupItem>
          <CListGroupItem>Mobile</CListGroupItem>
          <CListGroupItem>Gender</CListGroupItem>
        </CListGroup>

        <CCardBody className="gap-1 d-md-flex justify-content-md-center">
          {user === 'Individual' && (
            <Link to="/forms/form-control">
              <CButton className="btn btn-primary">Edit</CButton>
            </Link>
          )}
          {user === 'Organization' && (
            <Link to="/forms/organization-form">
              <CButton className="btn btn-primary">Edit</CButton>
            </Link>
          )}
          <span> </span>
          <Link to="/forms/user-contribution-table">
            <CButton className="btn btn-primary">Cancel</CButton>
          </Link>
          {/* <CCardLink href="#">Another link</CCardLink> */}
        </CCardBody>
      </CCard>
    </div>
  )
}

export default UserProfile
