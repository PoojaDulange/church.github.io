import React from 'react'
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
  CInputGroup,
  CInputGroupText,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import {
  cilLockLocked,
  cilUser,
  cilLocationPin,
  cilCircle,
  cilPhone,
  cilMobile,
  cilPin,
  cilList,
} from '@coreui/icons'

import { DocsExample } from 'src/components'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'

const FormControl = () => {
  const user = localStorage.getItem('user')
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4 col-8 m-auto">
            <CCardHeader className="text-center">
              {user == 'sadmin' && <strong>Church Admin</strong>}
              {user == 'admin' && <strong>Individual</strong>}
              {user == 'individual' && <strong>Individual</strong>}
            </CCardHeader>
            <CCardBody>
              <DocsExample href="forms/form-control">
                <CForm>
                  <CFormLabel htmlFor="firstName">
                    First Name<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput type="text" id="firstName" placeholder="Enter First Name" />
                  </CInputGroup>
                  <CFormLabel htmlFor="middleName">
                    Middle Name<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput type="text" id="middleName" placeholder="Enter Middle Name" />
                  </CInputGroup>
                  <CFormLabel htmlFor="lastName">
                    Last Name<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput type="text" id="lastName" placeholder="Enter Last Name" />
                  </CInputGroup>
                  <CFormLabel htmlFor="address">
                    Address1<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLocationPin} />
                    </CInputGroupText>
                    <CFormTextarea
                      id="address"
                      rows="3"
                      placeholder="Enter Address1"
                    ></CFormTextarea>
                  </CInputGroup>
                  <CFormLabel htmlFor="address">Address2</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLocationPin} />
                    </CInputGroupText>
                    <CFormTextarea
                      id="address"
                      rows="3"
                      placeholder="Enter Address2"
                    ></CFormTextarea>
                  </CInputGroup>
                  <CFormLabel htmlFor="city">
                    City<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCircle} />
                    </CInputGroupText>
                    <CFormInput type="text" id="city" placeholder="Enter city" />
                  </CInputGroup>
                  <CFormLabel htmlFor="state">
                    State<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCircle} />
                    </CInputGroupText>
                    <select className="form-select" aria-label="Default select example">
                      <option value="1">AL</option>
                      <option value="2">AK</option>
                      <option value="3">AZ</option>
                      <option value="1">AR</option>
                      <option value="2">CA</option>
                      <option value="3">CO</option>
                      <option value="1">CT</option>
                      <option value="2">CR</option>
                      <option value="3">DE</option>
                      <option value="1">FL</option>
                      <option value="2">GA</option>
                      <option value="3">HI</option>
                      <option value="1">ID</option>
                      <option value="2">IL</option>
                      <option value="3">IN</option>
                      <option value="1">KS</option>
                      <option value="2">KY</option>
                      <option value="3">ME</option>
                      <option value="1">MD</option>
                      <option value="2">MA</option>
                      <option value="3">MI</option>
                      <option value="1">UT</option>
                      <option value="2">OR</option>
                      <option value="3">NY</option>
                      <option value="3">WH</option>
                    </select>
                  </CInputGroup>
                  <CFormLabel htmlFor="zipcode">
                    ZipCode<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCircle} />
                    </CInputGroupText>
                    <CFormInput type="text" id="zipcode" placeholder="Enter Zipcode" />
                  </CInputGroup>
                  <CFormLabel htmlFor="tel">
                    Tel No.<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput type="text" id="tel" placeholder="Enter Tel. No." />
                  </CInputGroup>
                  <CFormLabel htmlFor="mobile">
                    Mobile No.<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilMobile} />
                    </CInputGroupText>
                    <CFormInput type="text" id="mobile" placeholder="Enter Mobile No." />
                  </CInputGroup>
                  {/* <div className="mb-3">
                    <CFormLabel>Gender:</CFormLabel>
                    <CRow>
                      <CCol>
                        <CFormCheck type="radio" id="male" label="Male" />
                        <CFormCheck type="radio" id="female" label="Female" />
                        <CFormCheck type="radio" id="other" label="Other" />
                      </CCol>
                    </CRow>
                  </div> */}
                  <CFormLabel htmlFor="mobile">
                    Gender<span style={{ color: 'red' }}>*</span>
                  </CFormLabel>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Other
                    </label>
                  </div>
                  {user === 'sadmin' && (
                    <div className="gap-2 d-md-flex justify-content-md-center">
                      <Link to="/forms/church-table/">
                        <CButton>Submit</CButton>
                      </Link>
                      <Link to="/forms/church-table/">
                        <CButton>Cancel</CButton>
                      </Link>
                    </div>
                  )}
                  {user === 'admin' && (
                    <div className="gap-2 d-md-flex justify-content-md-center">
                      <Link to="/forms/people-table/">
                        <CButton>Submit</CButton>
                      </Link>
                      <Link to="/forms/people-table/">
                        <CButton>Cancel</CButton>
                      </Link>
                    </div>
                  )}
                  {user === 'individual' && (
                    <div className="gap-2 d-md-flex justify-content-md-center">
                      <Link to="/forms/user-profile/">
                        <CButton>Submit</CButton>
                      </Link>
                      <Link to="/forms/user-profile/">
                        <CButton>Cancel</CButton>
                      </Link>
                    </div>
                  )}
                </CForm>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Set heights using <code>size</code> property like <code>size=&#34;lg&#34;</code> and{' '}
              <code>size=&#34;sm&#34;</code>.
            </p>
            <DocsExample href="forms/form-control#sizing">
              <CFormInput
                type="text"
                size="lg"
                placeholder="Large input"
                aria-label="lg input example"
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Default input"
                aria-label="default input example"
              />
              <br />
              <CFormInput
                type="text"
                size="sm"
                placeholder="Small input"
                aria-label="sm input example"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>disabled</code> boolean attribute on an input to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="forms/form-control#disabled">
              <CFormInput
                type="text"
                placeholder="Disabled input"
                aria-label="Disabled input example"
                disabled
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Disabled readonly input"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
              <br />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Readonly</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add the <code>readOnly</code> boolean attribute on an input to prevent modification of
              the input&#39;s value. Read-only inputs appear lighter (just like disabled inputs),
              but retain the standard cursor.
            </p>
            <DocsExample href="forms/form-control#readonly">
              <CFormInput
                type="text"
                placeholder="Readonly input here..."
                aria-label="readonly input example"
                readOnly
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Readonly plain text</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              If you want to have <code>&lt;input readonly&gt;</code> elements in your form styled
              as plain text, use the <code>plainText</code> boolean property to remove the default
              form field styling and preserve the correct margin and padding.
            </p>
            <DocsExample href="components/accordion">
              <CRow className="mb-3">
                <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
                  Email
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="staticEmail"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="password" id="inputPassword" />
                </div>
              </CRow>
            </DocsExample>
            <DocsExample href="components/accordion">
              <CForm className="row g-3">
                <div className="col-auto">
                  <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                    Email
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="staticEmail2"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
                <div className="col-auto">
                  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Password
                  </CFormLabel>
                  <CFormInput type="password" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                  <CButton type="submit" className="mb-3">
                    Confirm identity
                  </CButton>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>File input</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control#file-input">
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Default file input example</CFormLabel>
                <CFormInput type="file" id="formFile" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileMultiple">Multiple files input example</CFormLabel>
                <CFormInput type="file" id="formFileMultiple" multiple />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileDisabled">Disabled file input example</CFormLabel>
                <CFormInput type="file" id="formFileDisabled" disabled />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFileSm">Small file input example</CFormLabel>
                <CFormInput type="file" size="sm" id="formFileSm" />
              </div>
              <div>
                <CFormLabel htmlFor="formFileLg">Large file input example</CFormLabel>
                <CFormInput type="file" size="lg" id="formFileLg" />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong> <small>Color</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control#color">
              <CFormLabel htmlFor="exampleColorInput">Color picker</CFormLabel>
              <CFormInput
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
      </CRow>
    </div>
  )
}

export default FormControl
