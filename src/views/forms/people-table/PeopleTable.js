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

function PeopleTable() {
  const [people, setPeople] = useState([])
  const [search, setSearch] = useState('')
  const [filteredChurches, setFilteredChurches] = useState([])
  const data = [
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
    {
      firstName: 'pqr',
      middleName: 'xyz',
      lastName: 'lmn',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'lmn',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'F/M',
    },
  ]
  const column = [
    {
      name: 'People firstName',
      selector: (row) => row.firstName,
    },
    {
      name: 'People middleName',
      selector: (row) => row.middleName,
    },
    {
      name: 'People lastName',
      selector: (row) => row.lastName,
    },
    {
      name: 'People address1',
      selector: (row) => row.address1,
    },
    {
      name: 'People address2',
      selector: (row) => row.address2,
    },
    {
      name: 'People city',
      selector: (row) => row.city,
    },
    {
      name: 'People zipCode',
      selector: (row) => row.zipCode,
    },
    {
      name: 'People telNo',
      selector: (row) => row.telNo,
    },
    {
      name: 'People mobileNo',
      selector: (row) => row.mobileNo,
    },
    {
      name: 'People gender',
      selector: (row) => row.gender,
    },
    {
      name: 'Action',
      cell: (row) => (
        <Link to="/forms/form-control">
          <button className="btn btn-warning">Edit</button>
        </Link>
      ),
    },
  ]
  useEffect(() => {
    setFilteredChurches(data)

    const result = data.filter((people) => {
      return people.firstName.toLowerCase().match(search.toLowerCase())
    })

    setFilteredChurches(result)
  }, [search])
  return (
    <div className="text-center ">
      <CCard className="mt-3">
        <CCardHeader>
          <h3>Individual Table</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <CButton color="primary" onClick={window.print}>
              Print
            </CButton>

            <div className="ms-auto">
              <input
                type="text"
                placeholder="Search Here"
                className="p-2 form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <DataTable
            columns={column}
            data={filteredChurches}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            //actions={<button className="btn btn-primary">Export</button>}
            subHeader
            /* subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className="w-25 form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }*/
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default PeopleTable
