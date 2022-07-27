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

const ContributionTable = () => {
  const [contribution, setcontribution] = useState([])
  const [search, setSearch] = useState('')
  const [filteredChurches, setFilteredChurches] = useState([])
  const data = [
    {
      userName: 'Jack',
      contributionDate: '12/18/2021 10:41',
      Comments: 'Guest',
      PledgedAmount: '1000.00',
    },
    {
      userName: 'Rock',
      contributionDate: '11/04/2021 21:09',
      Comments: 'Guest',
      PledgedAmount: '2000.00',
    },
    {
      userName: 'Jonh',
      contributionDate: '02/15/2020 09:07',
      Comments: 'Guest',
      PledgedAmount: '5000.00',
    },
    {
      userName: 'Joe',
      contributionDate: '12/31/2018 16:16',
      Comments: 'Guest',
      PledgedAmount: '200.00',
    },
    {
      userName: 'Stella',
      contributionDate: '08/12/1998 08:09',
      Comments: 'Guest',
      PledgedAmount: '7000.00',
    },
    {
      userName: 'Cherry',
      contributionDate: '10/06/2015 20:15',
      Comments: 'Guest',
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
      selector: (row) => row.PledgedAmount,
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
      <CCard className="mt-3">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">Contribution Table</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button className="btn btn-primary btn-lg" onClick={window.print}>
              Print
            </button>

            <div className="ms-auto">
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
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            //actions={<button className="btn btn-primary justify-content-md-start">Export</button>}
            subHeader
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
