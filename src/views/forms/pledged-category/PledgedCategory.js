import { CCol, CRow, CWidgetStatsA } from '@coreui/react'
import React from 'react'

const PledgedCategory = () => {
  return (
    <div>
      <CRow>
        <CCol lg={4}>
          <CWidgetStatsA
            className="my-4"
            color="primary"
            value={<h4>Pledged</h4>}
            title={
              <h5 className="mt-3">
                Description
                <br />
                <br />
                Count:#200
              </h5>
            }
          />
        </CCol>
        <CCol lg={4}>
          <CWidgetStatsA
            className="my-4"
            color="info"
            value={<h4>Non-Pledged</h4>}
            title={
              <h5 className="mt-3">
                Description
                <br />
                <br />
                Count:#500
              </h5>
            }
          />
        </CCol>
        <CCol lg={4}>
          <CWidgetStatsA
            className="my-4"
            color="warning"
            value={<h4>Memorial</h4>}
            title={
              <h5 className="mt-3">
                Description
                <br />
                <br />
                Count:#210
              </h5>
            }
          />
        </CCol>
      </CRow>
    </div>
  )
}

export default PledgedCategory
