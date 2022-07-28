import { CCol, CRow, CWidgetStatsA } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCardHeader } from '@coreui/react'
import ExcelJS from 'exceljs'
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
      name: <strong>Pledge Name</strong>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <strong>Description</strong>,
      selector: (row) => row.description,
    },
    {},
    {
      name: <strong>Action</strong>,
      cell: (row) => (
        <Link to="/forms/pledge-add/">
          <button className="btn btn-primary">Edit</button>
        </Link>
      ),
    },
  ]
  const customStyles = {
    headCells: {
      style: { background: 'black', color: 'white' },
    },
  }
  useEffect(() => {
    setFilteredChurches(data)

    const result = data.filter((church) => {
      return church.name.toLowerCase().match(search.toLowerCase())
    })

    setFilteredChurches(result)
  }, [search])
  const exportData = () => {
    const fileName = 'simple.xlsx'
    const workbook = new ExcelJS.Workbook()
    const sheet = workbook.addWorksheet('my sheet')
    sheet.columns = [
      //   { header: "id", key: "id", width: 10 },
      { header: 'name', key: 'name', width: 32 },
      { header: 'description', key: 'description', width: 32 },
    ]
    sheet.addRow({
      name: data.name,
      description: data.description,
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
      <CCard className="mt-2">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">Pledged Category</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-md-flex">
            <div className="d-grid gap-2 d-md-flex ">
              <Link to="/forms/pledge-add/">
                <CButton color="primary ">Add New Pledge</CButton>
              </Link>
              <Link to="">
                <CButton onClick={exportData}>Export</CButton>
              </Link>
            </div>
            <div className=" ms-auto mb-3">
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
            customStyles={customStyles}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="1000px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default PledgedCategory
