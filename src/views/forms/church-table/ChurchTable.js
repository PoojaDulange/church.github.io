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
import { string } from 'prop-types'
import styled from 'styled-components'

const ChurchTable = () => {
  const [church, setChurch] = useState([])
  const [search, setSearch] = useState('')
  const [filteredChurches, setFilteredChurches] = useState([])
  const data = [
    {
      id: 0,
      name: 'GoodNews Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'gn@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '3143739763',
      mobile: '3423198386',
      url: 'http://goodnews.church/',
    },
    {
      id: 1,
      name: 'Yourdestiny Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'Yd@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '314373921',
      mobile: '8634231983',
      url: 'https://www.yourdestiny.church/',
    },
    {
      id: 2,
      name: 'Gracesterling Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'gs@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '3143735436',
      mobile: '4231983422',
      url: 'https://gracesterling.com/',
    },
    {
      id: 3,
      name: 'NewSpring Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'ns@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '521373921',
      mobile: '2319830912',
      url: 'https://newspring.cc',
    },
    {
      id: 4,
      name: 'Go2cornerstone Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'g2cs@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '1373921321',
      mobile: '9830325912',
      url: 'https://go2cornerstone.com/',
    },
    {
      id: 5,
      name: 'Saddleback Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'sbc@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '213573921',
      mobile: '2831930912',
      url: 'https://saddleback.com/',
    },
    {
      id: 6,
      name: 'Celebration Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'cs@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '373521921',
      mobile: '1983230912',
      url: 'https://celebration.church/',
    },
    {
      id: 7,
      name: 'ChurchontheMove',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'cotm@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '137323921',
      mobile: '8309128201',
      url: 'https://churchonthemove.com/',
    },
    {
      id: 8,
      name: 'Seacoast Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'sc@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '3739214261',
      mobile: '2319839102',
      url: 'https://www.seacoast.org/',
    },
    {
      id: 9,
      name: 'Gfcflorida Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'gf@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '3736231921',
      mobile: '6549830912',
      url: 'https://gfcflorida.com/',
    },
    {
      id: 10,
      name: 'Crosspoint Church',
      description: 'pqr',
      address1: 'Guest',
      address2: 'Church road',
      email: 'cc@gmail.com',
      city: 'lmn',
      stateId: 'LS',
      zipcode: '3739214104',
      mobile: '3198230912',
      url: 'https://crosspointechurch.com/',
    },
  ]
  const customStyles = {
    headCells: {
      style: { background: 'black', color: 'white' },
    },
  }
  const column = [
    {
      name: <strong>ChurchId</strong>,
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: <strong>Name</strong>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <strong>Description</strong>,
      selector: (row) => row.description,
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
      name: <strong>Email</strong>,
      selector: (row) => row.email,
    },
    {
      name: <strong>City</strong>,
      selector: (row) => row.city,
    },
    {
      name: <strong>State</strong>,
      selector: (row) => row.stateId,
    },
    {
      name: <strong>ZipCode</strong>,
      selector: (row) => row.zipcode,
    },
    {
      name: <strong>Mobile</strong>,
      selector: (row) => row.mobile,
    },
    {
      name: <strong>URL</strong>,
      selector: (row) => (
        <a href={row.url} target="_blank" rel="noreferrer">
          {row.name}
        </a>
      ),
    },
    {
      name: <strong style={{ fontSize: '18px' }}>Action</strong>,
      cell: (row) => (
        <Link to="/forms/church-Edit">
          <CButton className="btn btn-warning">Edit</CButton>
        </Link>
      ),
    },
  ]
  useEffect(() => {
    setFilteredChurches(data)

    const result = data.filter((church) => {
      return church.name.toLowerCase().match(search.toLowerCase())
    })

    setFilteredChurches(result)
  }, [search])
  return (
    <div className="text-center">
      <CCard className="mt-3">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">Church Table</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/forms/church-form">
              <CButton color="primary">Add New Church</CButton>
            </Link>
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
            data={filteredChurches}
            customStyles={customStyles}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            // <Link to="/forms/church-form">
            //   <CButton color="primary">AddChurch</CButton>
            // </Link>
            //

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

export default ChurchTable
