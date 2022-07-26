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

const UserContributionTable = () => {
  const [contribution, setcontribution] = useState([])
  const [search, setSearch] = useState('')
  const [filteredChurches, setFilteredChurches] = useState([])
  const data = [
    {
      contributionDate: '18/12/2021',
      Comments: 'Guest',
      PledgedAmount: '1000',
    },
    {
      contributionDate: '16/04/2021',
      Comments: 'Guest',
      PledgedAmount: '2000',
    },
    {
      contributionDate: '12/05/2020',
      Comments: 'Guest',
      PledgedAmount: '5000',
    },
    {
      contributionDate: '13/10/2018',
      Comments: 'Guest',
      PledgedAmount: '200',
    },
    {
      contributionDate: '08/12/1998',
      Comments: 'Guest',
      PledgedAmount: '7000',
    },
    {
      contributionDate: '20/06/2015',
      Comments: 'Guest',
      PledgedAmount: '1500',
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
  const column = [
    {
      name: 'Contribution Date',
      selector: (row) => row.contributionDate,
    },
    {
      name: 'Comments',
      selector: (row) => row.Comments,
    },
    {
      name: 'Pledged Amount',
      selector: (row) => row.PledgedAmount,
    },
  ]
  useEffect(() => {
    setFilteredChurches(data)

    const result = data.filter((contribution) => {
      return contribution.contributionDate.toLowerCase().match(search.toLowerCase())
    })

    setFilteredChurches(result)
  }, [search])
  return (
    <div className="text-center">
      {/* <Link to="/forms/church-form">
        <CButton color="primary">AddChurch</CButton>
      </Link> */}
      <CCard className="mt-5">
        <CCardHeader className="bg-dark">
          <h3 className="text-white">User Name</h3>
        </CCardHeader>
        <CCardBody>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button className="btn btn-primary btn-lg" onClick={window.print}>
              Print
            </button>
            <Link to="/forms/contribution-form/">
              <button className="btn btn-primary btn-lg">Contribute</button>
            </Link>

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

export default UserContributionTable
