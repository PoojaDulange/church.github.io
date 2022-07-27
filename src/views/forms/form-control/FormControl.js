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
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Link } from 'react-router-dom'

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
              {user == 'user' && <strong>Individual</strong>}
            </CCardHeader>
            <CCardBody>
              <DocsExample href="forms/form-control">
                <CForm>
                  <div className="mb-3">
                    <CFormLabel htmlFor="firstName">FirstName</CFormLabel>
                    <CFormInput type="text" id="firstName" placeholder="Enter First Name" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="middleName">MiddleName</CFormLabel>
                    <CFormInput type="text" id="middleName" placeholder="Enter Middle Name" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="lastName">LastName</CFormLabel>
                    <CFormInput type="text" id="lastName" placeholder="Enter Last Name" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="address">Address1</CFormLabel>
                    <CFormTextarea
                      id="address"
                      rows="3"
                      placeholder="Enter Address1"
                    ></CFormTextarea>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="address">Address2</CFormLabel>
                    <CFormTextarea
                      id="address"
                      rows="3"
                      placeholder="Enter Address2"
                    ></CFormTextarea>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="city">city</CFormLabel>
                    <CFormInput type="text" id="city" placeholder="Enter city" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="state">StateID</CFormLabel>
                    <CFormInput type="text" id="state" placeholder="Enter StateID" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="zipcode">ZipCode</CFormLabel>
                    <CFormInput type="text" id="zipcode" placeholder="Enter Zipcode" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="tel">Tel No.</CFormLabel>
                    <CFormInput type="number" id="tel" placeholder="Enter Tel. No." />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="mobile">Mobile No.</CFormLabel>
                    <CFormInput type="text" id="mobile" placeholder="Enter Mobile No." />
                  </div>
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
                    <div className="text-center">
                      <Link to="/forms/church-table/">
                        <CButton className="btn btn-primary">Submit</CButton>
                      </Link>
                      <Link to="/forms/church-table/">
                        <CButton className="btn btn-danger mx-3">Cancel</CButton>
                      </Link>
                    </div>
                  )}
                  {user === 'admin' && (
                    <div className="text-center">
                      <Link to="/forms/people-table/">
                        <CButton className="btn btn-primary">Submit</CButton>
                      </Link>
                      <Link to="/forms/people-table/">
                        <CButton className="btn btn-danger mx-3">Cancel</CButton>
                      </Link>
                    </div>
                  )}
                  {user === 'user' && (
                    <div className="text-center">
                      <Link to="/forms/people-table/">
                        <CButton className="btn btn-primary">Submit</CButton>
                      </Link>
                      <Link to="/forms/people-table/">
                        <CButton className="btn btn-danger mx-3">Cancel</CButton>
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
