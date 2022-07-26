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
      name: 'Kiva',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'Americorps',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'Water',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'pqr',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'kl',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'data',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'lmn',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'skik',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'ouiiuo',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'sposi',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
    {
      name: 'oiu',
      address1: 'pqr',
      address2: 'Guest',
      stateID: 'ssd',
      cityID: 'lmn',
      zipcode: '12524',
      telno: '5748586965',
      mobno: '6654685654',
      email: 'abc@gmail.com',
      contactPersonId: '54',
    },
  ]
  const column = [
    {
      name: 'Organization Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Address 1',
      selector: (row) => row.address1,
    },
    {
      name: 'Address 2',
      selector: (row) => row.address2,
    },
    {
      name: 'State',
      selector: (row) => row.stateID,
    },
    {
      name: 'City',
      selector: (row) => row.cityID,
    },
    {
      name: 'Zipcode',
      selector: (row) => row.zipcode,
    },
    {
      name: 'Telephone Number',
      selector: (row) => row.telno,
    },
    {
      name: 'Mobile Number',
      selector: (row) => row.mobno,
    },
    {
      name: 'Email Address',
      selector: (row) => row.email,
    },
    {
      name: 'Contact PersonID Number',
      selector: (row) => row.contactPersonId,
    },
    {
      name: 'Action',
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
  return (
    <div className="text-center">
      <CCard className="mt-5">
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
