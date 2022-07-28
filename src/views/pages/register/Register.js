import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormCheck,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilLockLocked,
  cilUser,
  cilLocationPin,
  cilCircle,
  cilPhone,
  cilMobile,
  cilPin,
} from '@coreui/icons'
import { Link } from 'react-router-dom'
import Carousels from '../../../views/base/carousels/Carousels.js'

const Register = () => {
  const [org, setOrg] = useState(false)
  const [individual, setIndividual] = useState(true)

  const handleOrgChange = () => {
    setOrg(true)
    setIndividual(false)
  }
  const handleIndChange = () => {
    setIndividual(true)
    setOrg(false)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardHeader className="text-center">
                  <h3>Register</h3>
                  {/* <ChecksRadios onChange={handleChange} /> */}
                </CCardHeader>
                <CRow>
                  <CCol xs={6} className="mb-2 mt-3 d-flex gap-3">
                    <CFormCheck
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      label="Individual"
                      value="individual"
                      onChange={handleIndChange}
                      checked={individual}
                    />
                    <CFormCheck
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      label="Organization"
                      value="organization"
                      onChange={handleOrgChange}
                    />
                  </CCol>
                </CRow>
                {org === true && (
                  <CCardBody>
                    <CForm>
                      <p className="text-medium-emphasis">Create your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput placeholder="Email" autoComplete="email" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Organization Name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLocationPin} />
                        </CInputGroupText>
                        <CFormInput placeholder="Address 1" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLocationPin} />
                        </CInputGroupText>
                        <CFormInput placeholder="Address 2" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilCircle} />
                        </CInputGroupText>
                        <CFormInput placeholder="State" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilCircle} />
                        </CInputGroupText>
                        <CFormInput placeholder="City" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilPin} />
                        </CInputGroupText>
                        <CFormInput placeholder="Zipcode" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilPhone} />
                        </CInputGroupText>
                        <CFormInput placeholder="Telephone Number" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilMobile} />
                        </CInputGroupText>
                        <CFormInput placeholder="Mobile Number" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="new-password"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Repeat password"
                          autoComplete="new-password"
                        />
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton color="primary">Create Account</CButton>
                      </div>
                      <p className="py-5">
                        Already have an account?
                        <Link to="/" className="text-decoration-none">
                          Login
                        </Link>
                      </p>
                    </CForm>
                  </CCardBody>
                )}
                {individual === true && (
                  <CCardBody>
                    <CForm>
                      <p className="text-medium-emphasis">Create your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput placeholder="Email" autoComplete="email" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="First Name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Middle Name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Last Name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLocationPin} />
                        </CInputGroupText>
                        <CFormInput placeholder="Address 1" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLocationPin} />
                        </CInputGroupText>
                        <CFormInput placeholder="Address 2" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilCircle} />
                        </CInputGroupText>
                        <CFormInput placeholder="State" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilCircle} />
                        </CInputGroupText>
                        <CFormInput placeholder="City" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilPin} />
                        </CInputGroupText>
                        <CFormInput placeholder="Zipcode" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilPhone} />
                        </CInputGroupText>
                        <CFormInput placeholder="Telephone Number" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilMobile} />
                        </CInputGroupText>
                        <CFormInput placeholder="Mobile Number" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Gender" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="new-password"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Repeat password"
                          autoComplete="new-password"
                        />
                      </CInputGroup>
                      <div className="d-grid d-md-flex justify-content-md-center">
                        <Link to="/">
                          <CButton color="primary">Create Account</CButton>
                        </Link>
                      </div>
                      <p className="py-5">
                        Already have an account?
                        <Link to="/" className="text-decoration-none">
                          Login
                        </Link>
                      </p>
                    </CForm>
                  </CCardBody>
                )}
              </CCard>
              {/* <CCard
                className="text-black py-5 content-center"
                style={{ width: '100%', height: 'auto' }}
              >
                <CCardBody
                  className="content-center m-auto "
                  style={{ display: 'flex' }}
                  justify-content-center
                >
                  <div className="m-auto">
                    <Carousels />
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
