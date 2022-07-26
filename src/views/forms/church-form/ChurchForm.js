import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const ChurchForm = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 col-8 m-auto">
          <CCardHeader className="text-center">
            <strong>Church</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="name">Church Name</CFormLabel>
                  <CFormInput type="text" id="name" placeholder="Enter Church Name" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="description">Description</CFormLabel>
                  <CFormTextarea
                    id="description"
                    rows="3"
                    placeholder="Enter Description"
                  ></CFormTextarea>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="address1">Address1</CFormLabel>
                  <CFormInput type="text" id="address1" placeholder="Enter Address1" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="address2">Address2</CFormLabel>
                  <CFormInput type="text" id="address2" placeholder="Enter Address2" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="city">City</CFormLabel>
                  <CFormInput type="text" id="city" placeholder="Enter City" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="zipcode">Zipcode</CFormLabel>
                  <CFormInput type="text" id="zipcode" placeholder="Enter Zipcode" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="churchUrl">Church URL</CFormLabel>
                  <CFormInput type="text" id="churchUrl" placeholder="Enter Church URL" />
                </div>
                <div className="text-center">
                  <Link to="/forms/church-table">
                    <CButton color="primary" className="mx-5">
                      Submit
                    </CButton>
                  </Link>
                  <Link to="/forms/church-table">
                    <CButton color="danger" className="mx-5">
                      Cancel
                    </CButton>
                  </Link>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ChurchForm
