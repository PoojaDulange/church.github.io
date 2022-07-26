import { CCol, CRow, CWidgetStatsA } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCardHeader } from '@coreui/react'

const PledgedCategory = () => {
  const [search, setSearch] = useState('')
  const [filteredChurches, setFilteredChurches] = useState([])
  const data = [
    {
      name: 'Education',
      description: `The purpose of pledge education. `,
    },
    {
      name: 'Food',
      description: `
    The Cool Food Pledge helps your organization commit`,
    },
    { name: 'Construction', description: 'The contractor party is obliged to deliver a work' },
  ]
  const column = [
    {
      name: 'Pledge Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
    },
    {},
    {
      name: 'Action',
      cell: (row) => (
        <Link to="/forms/pledge-add/">
          <button className="btn btn-warning">Edit</button>
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
      <CCard className="mt-2">
        <CCardHeader>
          <h3>Pledged Category</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-md-flex">
            <div className="d-grid gap-2 d-md-flex ">
              <Link to="/forms/pledge-add/">
                <CButton color="primary ">Add New Pledge</CButton>
              </Link>
              {/* <Link to="/forms/p">
                <CButton color="primary">Export</CButton>
              </Link> */}
            </div>
            <div className="ms-auto">
              <input
                type="text"
                placeholder="Search Here"
                className="w-100 form-control ms-500"
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
            fixedHeaderScrollHeight="1000px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default PledgedCategory
