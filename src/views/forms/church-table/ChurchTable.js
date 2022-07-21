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

const ChurchTable = () => {
  const [church, setChurch] = useState([])
  const [search, setSearch] = useState('')
  const [filteredChurches, setFilteredChurches] = useState([])
  const data = [
    { id: 0, name: 'xyz', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 1, name: 'abc', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 2, name: 'std', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 3, name: 'pqr', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 4, name: 'kl', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 5, name: 'data', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 6, name: 'lmn', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 7, name: 'skik', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 8, name: 'ouiiuo', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 9, name: 'sposi', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
    { id: 10, name: 'oiu', description: 'pqr', address: 'Guest', city: 'lmn', url: 'sgfghh' },
  ]
  const column = [
    {
      name: 'Church Id',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Church Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Church Description',
      selector: (row) => row.description,
    },
    {
      name: 'Church Address',
      selector: (row) => row.address,
    },
    {
      name: 'Church City',
      selector: (row) => row.city,
    },
    {
      name: 'Church URL',
      selector: (row) => row.url,
    },
    {
      name: 'Action',
      cell: (row) => <button className="btn btn-warning">Edit</button>,
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
      <Link to="/forms/church-form">
        <CButton color="primary">AddChurch</CButton>
      </Link>
      <CCard className="mt-5">
        <CCardHeader>
          <h3>Church Table</h3>
        </CCardHeader>
        <CCardBody>
          <DataTable
            columns={column}
            data={filteredChurches}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={<button className="btn btn-primary">Export</button>}
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className="w-25 form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ChurchTable
