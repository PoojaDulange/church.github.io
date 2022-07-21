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

const ReportForm = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Admin Report</h2>
      </div>
      <CRow>
        <CCol lg={4}>
          <CCard className="mt-5 text-center" style={{ height: '18rem' }}>
            <CCardHeader>
              <h3>User</h3>
            </CCardHeader>
            <CCardBody>
              <h4>Total Amount:$1000</h4>
              <CButton color="primary" className="mt-5">
                Export
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={4}>
          <CCard className="mt-5 text-center" style={{ height: '18rem' }}>
            <CCardHeader>
              <h3>Organization</h3>
            </CCardHeader>
            <CCardBody>
              <h4>Total Amount:$5000</h4>
              <CButton color="primary" className="mt-5">
                Export
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={4}>
          <CCard className="mt-5 text-center" style={{ height: '18rem' }}>
            <CCardHeader>
              <h3>Contribution</h3>
            </CCardHeader>
            <CCardBody>
              <h4>Total Amount: $6000</h4>
              <h4>Pleadged1: $2000</h4>
              <h4>Pleadged2: $1000</h4>
              <h4>Pleadged3: $3000</h4>
              <CButton className="mt-3" color="primary">
                Export
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default ReportForm
