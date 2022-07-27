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
      name: 'john josef',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'Boston',
      stateID: '12',
      zipCode: '413001',
      telNo: '217-514131',
      mobileNo: '1234567892',
      gender: 'Male/Female/Other',
      email: 'abc@gmail.com',
    },
    {
      name: 'smith',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'chicago',
      stateID: '21',
      zipCode: '413002',
      telNo: '217-514131',
      mobileNo: '1234567892',
      gender: 'Male/Female/Other',
      email: 'xyz@gmail.com',
    },
    {
      name: 'robert',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'austin',
      stateID: '13',
      zipCode: '413003',
      telNo: '217-514133',
      mobileNo: '1234567892',
      gender: 'Male/Female/Other',
      email: 'pqr@gmail.com',
    },
    {
      name: 'john josef',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'hoston',
      stateID: '31',
      zipCode: '413003',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'Male/Female/Other',
      email: 'uvw@gmail.com',
    },
    {
      name: 'wlliam',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'dallas',
      stateID: '14',
      zipCode: '413004',
      telNo: '217-514132',
      mobileNo: '1234567896',
      gender: 'Male/Female/Other',
      email: 'mno@gmail.com',
    },
    {
      name: 'john',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'chicago',
      stateID: '41',
      zipCode: '413005',
      telNo: '217-514132',
      mobileNo: '1234567893',
      gender: 'Male/Female/Other',
      email: 'pqr@gmail.com',
    },
    {
      name: 'sofia',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'miami',
      stateID: '15',
      zipCode: '413002',
      telNo: '217-514132',
      mobileNo: '1234567897',
      gender: 'Male/Female/Other',
      email: 'abc@gmail.com',
    },
    {
      name: 'john',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'miami',
      stateID: '51',
      zipCode: '413005',
      telNo: '217-514132',
      mobileNo: '1234567892',
      gender: 'Male/Female/Other',
      email: 'bce@gmail.com',
    },
    {
      name: ' josef',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'chicago',
      stateID: '16',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567898',
      gender: 'Male/Female/Other',
      email: 'abc@gmail.com',
    },
    {
      name: 'john',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'boston',
      stateID: '61',
      zipCode: '413004',
      telNo: '217-514131',
      mobileNo: '1234567896',
      gender: 'Male/Female/Other',
      email: 'rou@gmail.com',
    },
    {
      name: 'amelia',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'boston',
      stateID: '17',
      zipCode: '413001',
      telNo: '217-514132',
      mobileNo: '1234567891',
      gender: 'Male/Female/Other',
      email: 'yuw@gmail.com',
    },
    {
      name: 'amelia',
      address1: 'sgfghh',
      address2: 'sgfghh',
      city: 'chicago',
      stateID: '71',
      zipCode: '413006',
      telNo: '217-514132',
      mobileNo: '1234567898',
      gender: 'Male/Female/Other',
      email: 'xyz@gmail.com',
    },
  ]
  const customStyles = {
    headCells: {
      style: { background: 'black', color: 'white' },
    },
  }
  const column = [
    {
      name: <strong>Name</strong>,
      selector: (row) => row.name,
    },
    {
      name: <strong>Address1</strong>,
      selector: (row) => row.address1,
    },
    {
      name: <strong>Address2</strong>,
      selector: (row) => row.address2,
    },
    {
      name: <strong>City</strong>,
      selector: (row) => row.city,
    },
    {
      name: <strong>State</strong>,
      selector: (row) => row.stateID,
    },
    {
      name: <strong>ZipCode</strong>,
      selector: (row) => row.zipCode,
    },
    {
      name: <strong>TelNo</strong>,
      selector: (row) => row.telNo,
    },
    {
      name: <strong>Mobile</strong>,
      selector: (row) => row.mobileNo,
    },
    {
      name: <strong>Gender</strong>,
      selector: (row) => row.gender,
    },
    {
      name: <strong>Email</strong>,
      selector: (row) => row.email,
    },
    {
      name: <strong>Action</strong>,
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
      return people.name.toLowerCase().match(search.toLowerCase())
    })

    setFilteredChurches(result)
  }, [search])
  return (
    <div className="text-center">
      <CCard className="mt-3">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">Individual Table</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <CButton onClick={Window.print} color="primary" on>
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
            customStyles={customStyles}
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
