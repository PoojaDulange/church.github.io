import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormLabel,
  CFormInput,
  CButton,
  CFormTextarea,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilCircle, cilList } from '@coreui/icons'
const PledgeAdd = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 col-8 m-auto">
          <CCardHeader className="text-center">
            <strong>Pledge Form</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormLabel htmlFor="name">
                Pledge Name<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilCircle} />
                </CInputGroupText>
                <CFormInput type="text" id="name" placeholder="Enter Pledge Name" />
              </CInputGroup>
              <CFormLabel htmlFor="description">
                Description<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilList} />
                </CInputGroupText>
                <CFormTextarea
                  id="description"
                  rows="3"
                  placeholder="Enter Description"
                ></CFormTextarea>
              </CInputGroup>

              <div className="d-md-flex justify-content-md-center gap-2">
                <Link to="/forms/pledged-category/">
                  <CButton type="submit">Submit</CButton>
                </Link>
                <Link to="/forms/pledged-category/">
                  <CButton type="submit">Cancel</CButton>
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
