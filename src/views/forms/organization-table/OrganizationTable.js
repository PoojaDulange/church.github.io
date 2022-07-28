import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import DataTable from 'react-data-table-component'
import ExcelJS from 'exceljs'

const OrganizationTable = () => {
  const [organization, setOrganization] = useState([])
  const [search, setSearch] = useState('')
  const [filteredOrganization, setFilteredOrganization] = useState([])
  const data = [
    {
      name: 'World Team',
      address1: 'Bridgeport',
      address2: 'Guest',
      state: 'NJ',
      city: 'Hamilton Township',
      zipcode: '08501',
      telno: '874-852-4563',
      mobno: '874-852-4563',
      email: 'abc@gmail.com',
      enrolledon: '03-12-2019',
      url: 'https://www.greaterbergen.org/',
    },
    {
      name: 'Teen Missions International',
      address1: 'Bridge',
      address2: 'Guest',
      state: 'NJ',
      city: 'Old Bridge',
      zipcode: '07747',
      telno: '892-852-4563',
      mobno: '892-852-4563',
      email: 'abc@gmail.com',
      enrolledon: '01-12-2020',
      url: 'https://www.nj211.org/',
    },
    {
      name: 'Homeaid',
      address1: 'Angeles',
      address2: 'Guest',
      state: 'CA',
      city: 'Los Angeles',
      zipcode: '90001',
      telno: '5748586965',
      mobno: '852-632-4157',
      email: 'abc@gmail.com',
      enrolledon: '08-01-2019',
      url: 'https://www.who.int/',
    },
    {
      name: 'Paralyzed Veterans Of America',
      address1: 'pqr',
      address2: 'Guest',
      state: 'NJ',
      city: 'Teaneck',
      zipcode: '07605',
      telno: '5748586965',
      mobno: '559-854-9632',
      email: 'abc@gmail.com',
      enrolledon: '08-12-2018',
      url: 'https://www.zippia.com/',
    },
    {
      name: 'Wbenc',
      address1: 'pqr',
      address2: 'Guest',
      state: 'NJ',
      city: 'Princeton',
      zipcode: '08541',
      telno: '5748586965',
      mobno: '559-632-587',
      email: 'Wbenc@gmail.com',
      enrolledon: '03-23-2019',
      url: 'https://www.crunchbase.com/',
    },
    {
      name: 'The First Tee',
      address1: 'pqr',
      address2: 'Guest',
      state: 'NY',
      city: 'Trinity',
      zipcode: '10006',
      telno: '5748586965',
      mobno: '452-856-6324',
      email: 'First@gmail.com',
      enrolledon: '03-13-2017',
      url: 'https://www.who.int/',
    },
    {
      name: 'Freefrom',
      address1: 'pqr',
      address2: 'Guest',
      state: 'NY',
      city: 'PrinceTown',
      zipcode: '10012',
      telno: '5748586965',
      mobno: '458-963-4587',
      email: 'Freefrom@gmail.com',
      enrolledon: '04-30-2017',
      url: 'https://www.crunchbase.com/',
    },
    {
      name: 'Eac Network',
      address1: 'pqr',
      address2: 'Guest',
      state: 'NY',
      city: 'Roosevelt Island',
      zipcode: '10044',
      telno: '574-963-8974',
      mobno: '574-963-8974',
      email: 'Network@gmail.com',
      enrolledon: '03-12-2019',
      url: 'https://njnonprofits.org/',
    },
  ]
  const column = [
    {
      name: <strong>Name</strong>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <strong>Address</strong>,
      selector: (row) => row.address1,
    },
    // {
    //   name: <strong>Address2</strong>,
    //   selector: (row) => row.address2,
    // },
    {
      name: <strong>State</strong>,
      selector: (row) => row.state,
    },
    {
      name: <strong>City</strong>,
      selector: (row) => row.city,
    },
    {
      name: <strong>ZipCode</strong>,
      selector: (row) => row.zipcode,
    },
    // {
    //   name: <strong>TelNo</strong>,
    //   selector: (row) => row.telno,
    // },
    {
      name: <strong>Mobile</strong>,
      selector: (row) => row.mobno,
    },
    // {
    //   name: <strong>Email</strong>,
    //   selector: (row) => row.url,
    // },
    {
      name: <strong>URL</strong>,
      selector: (row) => (
        <a href={row.url} target="_blank" rel="noreferrer">
          {row.url}
        </a>
      ),
    },
    // {
    //   name: <strong>EnrolledOn</strong>,
    //   selector: (row) => row.enrolledon,
    // },
    {
      name: <strong>Action</strong>,
      cell: (row) => (
        <Link to="/forms/organization-form/">
          <button className="btn btn-primary">Edit</button>
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
    rows: {
      style: { marginTop: '10px', width: '100%' },
    },
  }
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
          <h3 className="text-white">Organization Table</h3>
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
            data={filteredOrganization}
            pagination
            customStyles={customStyles}
            fixedHeader
            // fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            // actions={<button className="btn btn-primary">Export</button>}
            // subHeader
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
