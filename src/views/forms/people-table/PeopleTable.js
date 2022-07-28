import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExcelJS from 'exceljs'
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
      name: 'John josef',
      address1: 'North Kierland',
      city: 'BScottsdale',
      stateID: 'AZ',
      zipCode: '85254',
      telNo: '217-514131',
      mobileNo: '123-456-7892',
      gender: 'Male/Female/Other',
      email: 'abc@gmail.com',
    },
    {
      name: 'Smith',
      address1: 'Avocado Ave',
      city: 'Newport Beach',
      stateID: 'CA',
      zipCode: '92660',
      telNo: '217-514131',
      mobileNo: '123-456-7892',
      gender: 'Male/Female/Other',
      email: 'xyz@gmail.com',
    },
    {
      name: 'Robert',
      address1: 'Buena Vista',
      city: 'Lake Buena',
      stateID: 'FL',
      zipCode: '32830',
      telNo: '217-514133',
      mobileNo: '123-456-7892',
      gender: 'Male/Female/Other',
      email: 'pqr@gmail.com',
    },
    {
      name: 'John josef',
      address1: 'Mauna Lani',
      city: 'Kohala Coast',
      stateID: 'HI',
      zipCode: '96743',
      telNo: '217-514132',
      mobileNo: '123-456-7891',
      gender: 'Male/Female/Other',
      email: 'uvw@gmail.com',
    },
    {
      name: 'Wlliam',
      address1: "Kukui'ula Village",
      city: 'Koloa',
      stateID: 'HI',
      zipCode: '96756',
      telNo: '217-514132',
      mobileNo: '123-456-7896',
      gender: 'Male/Female/Other',
      email: 'mno@gmail.com',
    },
    {
      name: 'John',
      address1: 'Beachwalk',
      city: 'Honololu',
      stateID: 'Hi',
      zipCode: '96815',
      telNo: '217-514132',
      mobileNo: '123-456-7893',
      gender: 'Male/Female/Other',
      email: 'pqr@gmail.com',
    },
    {
      name: 'Sofia',
      address1: 'Waikoloa Beach',
      city: 'Waikoloa',
      stateID: 'Hi',
      zipCode: '96738',
      telNo: '217-514132',
      mobileNo: '123-456-7897',
      gender: 'Male/Female/Other',
      email: 'abc@gmail.com',
    },
    {
      name: 'John',
      address1: 'Wailea Drive',
      city: 'Kihei',
      stateID: 'HI',
      zipCode: '96753',
      telNo: '217-514132',
      mobileNo: '123-456-7892',
      gender: 'Male/Female/Other',
      email: 'bce@gmail.com',
    },
    {
      name: ' Josef',
      address1: 'BelleVue Square',
      city: 'BelleVue',
      stateID: 'WA',
      zipCode: '98004',
      telNo: '217-514132',
      mobileNo: '123-456-7898',
      gender: 'Male/Female/Other',
      email: 'abc@gmail.com',
    },
    {
      name: 'John',
      address1: 'North Kierland',
      city: 'BScottsdale',
      stateID: 'AZ',
      zipCode: '85254',
      telNo: '217-514131',
      mobileNo: '123-456-7896',
      gender: 'Male/Female/Other',
      email: 'rou@gmail.com',
    },
    {
      name: 'Amelia',
      address1: 'BelleVue Square',
      city: 'BelleVue',
      stateID: 'WA',
      zipCode: '98004',
      telNo: '217-514132',
      mobileNo: '123-456-7891',
      gender: 'Male/Female/Other',
      email: 'yuw@gmail.com',
    },
    {
      name: 'Amelia',
      address1: 'Wailea Drive',
      city: 'Kihei',
      stateID: 'HI',
      zipCode: '96753',
      telNo: '217-514132',
      mobileNo: '123-456-7898',
      gender: 'Male/Female/Other',
      email: 'xyz@gmail.com',
    },
  ]
  const customStyles = {
    headCells: {
      style: { background: 'black', color: 'white' },
    },
    rows: {
      style: { marginTop: '10px', width: '100%' },
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

      selector: (row) => <a href={`mailto:${row.email}`}>{row.email}</a>,
    },
    {
      name: <strong>Action</strong>,
      cell: (row) => (
        <Link to="/forms/form-control">
          <button className="btn btn-primary">Edit</button>
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
  const exportData = () => {
    const fileName = 'simple.xlsx'
    const workbook = new ExcelJS.Workbook()
    const sheet = workbook.addWorksheet('my sheet')
    sheet.columns = [
      //   { header: "id", key: "id", width: 10 },
      { header: 'name', key: 'name', with: 32 },
      { header: 'description', key: 'description', width: 32 },
      { header: 'address1', key: 'address1', width: 32 },
      { header: 'city', key: 'city', width: 32 },
      { header: 'state', key: 'stateId', width: 32 },
      { header: 'zipcode', key: 'zipcode', width: 32 },
      { header: 'mobile', key: 'mobile', width: 32 },
      { header: 'email', key: 'email', width: 32 },
      { header: 'url', key: 'url', width: 32 },
    ]
    sheet.addRow({
      name: data.name,
      description: data.description,
      address1: data.address1,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      mobile: data.mobile,
      email: data.email,
      url: data.url,
    })
    workbook.xlsx
      .writeBuffer(fileName)
      .then(() => {
        console.log('file created')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="text-center">
      <CCard className="mt-3">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">Individual Table</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="">
              <CButton color="primary" onClick={window.print}>
                Print
              </CButton>
            </Link>
            <Link to="">
              <CButton color="primary" onClick={exportData}>
                Export
              </CButton>
            </Link>
            <div className="ms-auto mb-3">
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
            // fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            //actions={<button className="btn btn-primary">Export</button>}
            //subHeader
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
