import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormLabel,
  CFormTextarea,
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCircle, cilList, cilCalendar, cilMoney } from '@coreui/icons'

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
              <CFormLabel htmlFor="date">
                ContributionDate<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilCalendar} />
                </CInputGroupText>
                <CFormInput type="datetime-local" id="date" placeholder="Enter Date" />
              </CInputGroup>
              <CFormLabel htmlFor="name">
                PledgeCategoryName<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilList} />
                </CInputGroupText>
                <select className="form-select" aria-label="Default select example">
                  <option value="1">Education</option>
                  <option value="2">Construction</option>
                  <option value="3">Food</option>
                </select>
              </CInputGroup>

              {/* <div className="mb-3">
                <CFormInput type="text" id="name" placeholder="Enter Church Name" />
              </div> */}
              <CFormLabel htmlFor="exampleFormControlTextarea1">
                Comments <span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilList} />
                </CInputGroupText>

                <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
              </CInputGroup>
              <CFormLabel htmlFor="amount">
                PlegdedAmount<span style={{ color: 'red' }}>*</span>
              </CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilMoney} />
                </CInputGroupText>

                <CFormInput type="number" id="amount" placeholder="Enter Pledged Amount" />
              </CInputGroup>
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
              <div className="gap-2 d-md-flex justify-content-md-center">
                <Link to="/forms/user-contribution-table/">
                  <CButton>Submit</CButton>
                </Link>
                <Link to="/forms/user-contribution-table/">
                  <CButton>Cancel</CButton>
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
