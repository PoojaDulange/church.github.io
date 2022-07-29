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
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilLocationPin, cilCircle, cilPhone } from '@coreui/icons'

const organizationForm = () => {
  const user = localStorage.getItem('user')
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 col-8 m-auto">
          <CCardHeader className="text-center">
            <strong>Organization</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormLabel>
                Organization Name<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput placeholder="Organization Name" />
              </CInputGroup>
              <CFormLabel>
                Address1<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilLocationPin} />
                </CInputGroupText>
                <CFormInput placeholder="Address 1" />
              </CInputGroup>
              <CFormLabel>Address2</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilLocationPin} />
                </CInputGroupText>
                <CFormInput placeholder="Address 2" />
              </CInputGroup>
              {/* <div className="mb-3">
                <CFormLabel htmlFor="state">State</CFormLabel>
                <CFormInput type="text" id="State" placeholder="Enter State Id" />
              </div> */}
              <CFormLabel>
                City<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilCircle} />
                </CInputGroupText>
                <CFormInput placeholder="City" />
              </CInputGroup>

              <CFormLabel>
                State<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                  <CIcon icon={cilLocationPin} />
                </CInputGroupText>
                <CFormSelect id="inputGroupSelect01">
                  <option value="1">AL</option> <option value="2">AK</option>
                  <option value="3">AZ</option>
                  <option value="1">AR</option> <option value="2">CA</option>
                  <option value="3">CO</option>
                  <option value="1">CT</option> <option value="2">CR</option>
                  <option value="3">DE</option>
                  <option value="1">FL</option> <option value="2">GA</option>
                  <option value="3">HI</option>
                  <option value="1">ID</option> <option value="2">IL</option>
                  <option value="3">IN</option>
                  <option value="1">KS</option> <option value="2">KY</option>
                  <option value="3">ME</option>
                  <option value="1">MD</option> <option value="2">MA</option>
                  <option value="3">MI</option>
                  <option value="1">UT</option>
                </CFormSelect>
              </CInputGroup>
              <CFormLabel>
                Zipcode<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilCircle} />
                </CInputGroupText>
                <CFormInput placeholder="Zipcode" />
              </CInputGroup>
              <CFormLabel>
                Telephone No.<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilPhone} />
                </CInputGroupText>
                <CFormInput placeholder="Telephone Number" />
              </CInputGroup>
              <CFormLabel>
                Mobile No.<span style={{ color: 'red' }}>*</span>
              </CFormLabel>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilPhone} />
                </CInputGroupText>
                <CFormInput placeholder="Mobile Number" />
              </CInputGroup>
              {/* <div className="mb-3">
                <CFormLabel htmlFor="enrolledon">Enrolled On</CFormLabel>
                <CFormInput type="date" id="enrolledon" />
              </div> */}
              {user === 'admin' && (
                <div className="d-md-flex justify-content-md-center gap-2">
                  <Link to="/forms/organization-table/">
                    <CButton type="submit">Submit</CButton>
                  </Link>
                  <Link to="/forms/organization-table/">
                    <CButton type="submit">Cancel</CButton>
                  </Link>
                </div>
              )}
              {user === 'organization' && (
                <div className="d-md-flex justify-content-md-center gap-2">
                  <Link to="/forms/user-profile">
                    <CButton type="submit">Submit</CButton>
                  </Link>
                  <Link to="/forms/user-profile">
                    <CButton type="submit">Cancel</CButton>
                  </Link>
                </div>
              )}
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default organizationForm
