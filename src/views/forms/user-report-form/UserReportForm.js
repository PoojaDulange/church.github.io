import React, { useEffect, useState } from 'react'
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
  CLink,
  CRow,
} from '@coreui/react'
import DataTable from 'react-data-table-component'

const UserReportForm = () => {
  return (
    <div>
      <div className="text-center">
        <h2>User Report</h2>
      </div>
      <CCard className="mt-5 text-center m-auto" style={{ height: '18rem', width: '30%' }}>
        <CCardHeader>
          <h3>User Name</h3>
        </CCardHeader>
        <CCardBody>
          <h4>Total Amount:$1000</h4>
          <h4>Pledge Categories</h4>
          <CButton color="primary" className="mt-5">
            Export
          </CButton>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default UserReportForm
