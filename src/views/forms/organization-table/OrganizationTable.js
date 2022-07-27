import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import DataTable from 'react-data-table-component'

const OrganizationTable = () => {
  const [organization, setOrganization] = useState([])
  const [search, setSearch] = useState('')
  const [filteredOrganization, setFilteredOrganization] = useState([])
  const data = [
    {
      name: 'World Team',
      address1: 'Bridgeport',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      enrolledon: '03-12-2019',
    },
    {
      name: 'Teen Missions International',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      enrolledon: '03-02-2019',
    },
    {
      name: 'Jeff Cherubin Domond Foundation',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      enrolledon: '01-12-2020',
    },
    {
      name: 'Homeaid',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      enrolledon: '08-01-2019',
    },
    {
      name: 'Paralyzed Veterans Of America',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      enrolledon: '08-12-2018',
    },
    {
      name: 'Wbenc',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'Wbenc@gmail.com',
      enrolledon: '03-23-2019',
    },
    {
      name: 'The First Tee',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'First@gmail.com',
      enrolledon: '03-13-2017',
    },
    {
      name: 'Freefrom',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'Freefrom@gmail.com',
      enrolledon: '04-30-2017',
    },
    {
      name: 'Eac Network',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'Network@gmail.com',
      enrolledon: '03-12-2019',
    },
    {
      name: 'Artsquest',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'Artsquest@gmail.com',
      enrolledon: '01-12-2018',
    },
    {
      name: 'Foodcorps',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      city: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'Foodcorps@gmail.com',
      enrolledon: '10-12-2018',
    },
  ]
  const column = [
    {
      name: <strong>Name</strong>,
      selector: (row) => row.name,
      sortable: true,
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
      name: <strong>State</strong>,
      selector: (row) => row.stateID,
    },
    {
      name: <strong>City</strong>,
      selector: (row) => row.city,
    },
    {
      name: <strong>ZipCode</strong>,
      selector: (row) => row.zipcode,
    },
    {
      name: <strong>TelNo</strong>,
      selector: (row) => row.telno,
    },
    {
      name: <strong>Mobile</strong>,
      selector: (row) => row.mobno,
    },
    {
      name: <strong>Email</strong>,
      selector: (row) => row.email,
    },
    {
      name: <strong>EnrolledOn</strong>,
      selector: (row) => row.enrolledon,
    },
    {
      name: <strong>Action</strong>,
      cell: (row) => (
        <Link to="/forms/organization-form/">
          <button className="btn btn-warning">Edit</button>
        </Link>
      ),
    },
  ]
  useEffect(() => {
    setFilteredOrganization(data)

    const result = data.filter((church) => {
      return church.name.toLowerCase().match(search.toLowerCase())
    })

    setFilteredOrganization(result)
  }, [search])
  const customStyles = {
    headCells: {
      style: { background: 'black', color: 'white' },
    },
  }
  return (
    <div className="text-center">
      <CCard className="mt-3">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">Organization Table</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="">
              <CButton color="primary" onClick={window.print}>
                Print
              </CButton>
            </Link>

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
            data={filteredOrganization}
            pagination
            customStyles={customStyles}
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            // actions={<button className="btn btn-primary">Export</button>}
            subHeader
            // subHeaderComponent={
            //   <input
            //     type="text"
            //     placeholder="Search Here"
            //     className="w-25 form-control"
            //     value={search}
            //     onChange={(e) => setSearch(e.target.value)}
            //   />
            // }
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default OrganizationTable
