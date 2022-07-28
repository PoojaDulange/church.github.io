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
import ExcelJS from 'exceljs'
const ContributionTable = () => {
  const [contribution, setcontribution] = useState([])
  const [search, setSearch] = useState('')
  const [filteredChurches, setFilteredChurches] = useState([])
  const data = [
    {
      userName: 'Jack',
      contributionDate: '12/18/2021 ',
      Comments: 'Contributed for Education',
      PledgedAmount: '1000.00',
    },
    {
      userName: 'Rock',
      contributionDate: '11/04/2021',
      Comments: 'Contributed for Church',
      PledgedAmount: '3000.00',
    },
    {
      userName: 'John',
      contributionDate: '02/15/2020',
      Comments: 'Contributed for Health',
      PledgedAmount: '5000.00',
    },
    {
      userName: 'Joe',
      contributionDate: '12/31/2018',
      Comments: 'Contributed for Education',
      PledgedAmount: '2000.00',
    },
    {
      userName: 'Stella',
      contributionDate: '08/12/1998',
      Comments: 'Contributed for Health',
      PledgedAmount: '7000.00',
    },
    {
      userName: 'Cherry',
      contributionDate: '10/06/2015',
      Comments: 'Contributed for Education',
      PledgedAmount: '1500.00',
    },

    // { userName: 'lmn', contributionDate: 'MM/DD/YY', Comments: 'Guest', PledgedAmount: '600' },
    // {
    //   userName: 'skik',
    //   contributionDate: 'MM/DD/YY',
    //   Comments: 'Guest',
    //   PledgedAmount: 'lmn',
    // },
    // {
    //   userName: 'ouiiuo',
    //   contributionDate: 'MM/DD/YY',
    //   Comments: 'Guest',
    //   PledgedAmount: 'lmn',
    // },
    // {
    //   userName: 'sposi',
    //   contributionDate: 'MM/DD/YY',
    //   Comments: 'Guest',
    //   PledgedAmount: 'lmn',
    // },
    // { userName: 'oiu', contributionDate: 'MM/DD/YY', Comments: 'Guest', PledgedAmount: 'lmn' },
  ]
  const exportData = () => {
    const fileName = 'simple.xlsx'
    const workbook = new ExcelJS.Workbook()
    const sheet = workbook.addWorksheet('my sheet')
    sheet.columns = [
      //   { header: "id", key: "id", width: 10 },
      { header: 'userName', key: 'username', width: 32 },
      { header: 'contributionDate', key: 'contributiondate', width: 32 },
      { header: 'Comments', key: 'comments', width: 32 },
      { header: 'pledgeAmount', key: 'pledgeAmount', width: 32 },
    ]
    sheet.addRow({
      userName: data.username,
      contributionDate: data.contributiondate,
      Comments: data.comments,
      pledgeAmount: data.pledgeAmount,
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
  const customStyles = {
    headCells: {
      style: { background: 'black', color: 'white' },
    },
  }
  const column = [
    {
      name: <strong>User Name</strong>,
      selector: (row) => row.userName,
      sortable: true,
    },
    {
      name: <strong>Contribution Date</strong>,
      selector: (row) => row.contributionDate,
    },
    {
      name: <strong>Comments</strong>,
      selector: (row) => row.Comments,
    },
    {
      name: <strong>Pledged Amount ($)</strong>,
      selector: (row) => <p className="align-center">{row.PledgedAmount}</p>,
    },
  ]
  useEffect(() => {
    setFilteredChurches(data)

    const result = data.filter((contribution) => {
      return contribution.userName.toLowerCase().match(search.toLowerCase())
    })

    setFilteredChurches(result)
  }, [search])
  return (
    <div className="text-center">
      {/* <Link to="/forms/church-form">
        <CButton color="primary">AddChurch</CButton>
      </Link> */}
      <CCard className="mt-2">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">Contribution Table</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="">
              <button className="btn btn-primary" onClick={window.print}>
                Print
              </button>
            </Link>
            <Link to="">
              <button className="btn btn-primary" onClick={exportData}>
                Export
              </button>
            </Link>
            <div className="ms-auto mb-3">
              <input
                type="text"
                placeholder="Search Here"
                className="w-35 form-control"
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
            //fixedHeaderScrollHeight="450px"
            // selectableRows
            selectableRowsHighlight
            highlightOnHover
            //actions={<button className="btn btn-primary justify-content-md-start">Export</button>}
            //subHeader
            // subHeaderComponent={
            // //   <input
            // //     type="text"
            // //     placeholder="Search Here"
            // //     className="w-25 form-control"
            // //     value={search}
            // //     onChange={(e) => setSearch(e.target.value)}
            // //   />
            // }
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ContributionTable
