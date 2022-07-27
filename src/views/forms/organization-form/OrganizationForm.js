import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const organizationForm = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 col-8 m-auto">
          <CCardHeader className="text-center">
            <strong>Organization</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput type="text" id="name" placeholder="Enter Name" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="adderss1">Address1</CFormLabel>
                <CFormInput type="text" id="address1" placeholder="Enter Address1" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="address2">Address2</CFormLabel>
                <CFormInput type="text" id="address2" placeholder="Enter Address2" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="cityID">StateID</CFormLabel>
                <CFormInput type="text" id="StateID" placeholder="Enter State Id" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="cityID">City</CFormLabel>
                <CFormInput type="text" id="city" placeholder="Enter City" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="zipcode">ZipCode</CFormLabel>
                <CFormInput type="number" id="zipcode" placeholder="Enter Zipcode" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="telno">Telephone Number</CFormLabel>
                <CFormInput type="number" id="telno" placeholder="Enter Telephone Number" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="mobno">Mobile Number</CFormLabel>
                <CFormInput type="number" id="mobno" placeholder="Enter Mobile No" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="enrolledon">Enrolled On</CFormLabel>
                <CFormInput type="date" id="enrolledon" />
              </div>
              <div className=" text-center">
                <Link to="/forms/organization-table/">
                  <CButton type="submit" className="mb-3 mx-3">
                    Submit
                  </CButton>
                </Link>
                <Link to="/forms/organization-table/">
                  <CButton type="submit" className="mb-3 btn btn-danger">
                    Cancel
                  </CButton>
                </Link>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default organizationForm
