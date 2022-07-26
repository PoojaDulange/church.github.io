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
          <CListGroupItem>Address 2</CListGroupItem>
          <CListGroupItem>City</CListGroupItem>
          <CListGroupItem>Pincode</CListGroupItem>
          <CListGroupItem>URL</CListGroupItem>
        </CListGroup>

        <CCardBody>
          <Link to="/forms/church-form">
            <CButton className="btn btn-warning">Edit</CButton>
          </Link>
          <span> </span>
          <Link to="/forms/church-table/">
            {' '}
            <CButton className="btn btn-danger">Cancel</CButton>
          </Link>
          {/* <CCardLink href="#">Another link</CCardLink> */}
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ChurchProfile
