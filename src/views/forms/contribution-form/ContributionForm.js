import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const Contribution = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4 col-8 m-auto">
          <CCardHeader className="text-center">
            <strong>Contribution</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              {/* <div className="m-auto">
                <h2>Add Admin</h2>
              </div> */}
              {/* <div className="mb-3">
                <CFormLabel htmlFor="id">UserID</CFormLabel>
                <CFormInput type="number" id="id" placeholder="enter your id" />
              </div> */}
              <div className="mb-3">
                <CFormLabel htmlFor="date">ContributionDate</CFormLabel>
                <CFormInput type="date" id="date" placeholder="Enter Date" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="name">PledgeCategoryName</CFormLabel>
                <CDropdown className="mx-3" id="name">
                  <CDropdownToggle color="secondary">PledgeCategory</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Pledged</CDropdownItem>
                    <CDropdownItem href="#">Non-Plegded</CDropdownItem>
                    <CDropdownItem href="#">Memorial</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
              {/* <div className="mb-3">
                <CFormInput type="text" id="name" placeholder="Enter Church Name" />
              </div> */}
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Comments</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
              </div>
              {/* <div>
                <CFormLabel htmlFor="exampleFormControlInput1">Memorial </CFormLabel>
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Yes"
                />
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="No"
                  defaultChecked
                />
              </div>
              <div>
                <CFormLabel htmlFor="exampleFormControlInput1">Pledged</CFormLabel>
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Yes"
                />
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="No"
                  defaultChecked
                />
              </div> */}
              {/*<div className="d-grid gap-2 col-6 mx-auto">
                <CButton color="primary">Submit</CButton>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <CButton color="primary">Cancel</CButton>
              </div> */}
              {/* <CButtonGroup>
                <CButton className="m-auto"> Group 1 </CButton>
                <CButton> Group 2 </CButton>
              </CButtonGroup> */}
              <div className="gap-4 d-md-flex justify-content-md-center">
                <Link to="/forms/user-contribution-table/">
                  <CButton color="primary" className="me-md-2">
                    Submit
                  </CButton>
                </Link>
                <Link to="/forms/user-contribution-table/">
                  <CButton color="danger">Cancel</CButton>
                </Link>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Contribution
