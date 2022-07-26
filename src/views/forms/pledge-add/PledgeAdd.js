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
  CFormTextarea,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const PledgeAdd = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 col-8 m-auto">
          <CCardHeader className="text-center">
            <strong> Add Pledge</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="name">Pledge Name</CFormLabel>
                <CFormInput type="text" id="name" placeholder="Enter Pledge Name" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="description">Description</CFormLabel>
                <CFormTextarea
                  id="description"
                  rows="3"
                  placeholder="Enter Description"
                ></CFormTextarea>
              </div>

              <div className=" text-center">
                <Link to="/forms/pledged-category/">
                  <CButton type="submit" className="mb-3">
                    Submit
                  </CButton>
                </Link>
                <Link to="/forms/pledged-category/">
                  <CButton type="submit" className="mb-3 btn btn-danger mx-5">
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

export default PledgeAdd
