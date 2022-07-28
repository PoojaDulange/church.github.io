/* eslint-disable react/jsx-no-undef */
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

const ChurchProfile = () => {
  return (
    <div>
      <CCard style={{ width: '70%', margin: 'auto', height: 'auto' }}>
        <CCardImage
          className="flex justify-content-center m-auto mt-4"
          src="https://images.unsplash.com/photo-1555696958-c5049b866f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          style={{ width: '50%', height: '25%' }}
        />
        <CCardBody>
          <CCardTitle>Church Name</CCardTitle>
          <CCardText>Church description goes here as a full of para</CCardText>
        </CCardBody>
        <CListGroup flush>
          <CListGroupItem>Church Name</CListGroupItem>
          <CListGroupItem>Description</CListGroupItem>
          <CListGroupItem>Address1</CListGroupItem>
          <CListGroupItem>Address2</CListGroupItem>
          <CListGroupItem>City</CListGroupItem>
          <CListGroupItem>State</CListGroupItem>
          <CListGroupItem>ZipCode</CListGroupItem>
          <CListGroupItem>MobileNo</CListGroupItem>
          <CListGroupItem>Email</CListGroupItem>
          <CListGroupItem>Church URL</CListGroupItem>
        </CListGroup>

        <CCardBody>
          <div className="gap-1 d-md-flex justify-content-md-center">
            <Link to="/forms/church-edit">
              <CButton className="btn btn-primary ">Edit</CButton>
            </Link>
            <span> </span>
            <Link to="/dashboard1">
              {' '}
              <CButton className="btn btn-primary">Cancel</CButton>
            </Link>
          </div>
          {/* <CCardLink href="#">Another link</CCardLink> */}
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ChurchProfile
