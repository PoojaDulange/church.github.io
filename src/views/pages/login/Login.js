import React, { useState, createContext, useContext } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import image from '../../../assets/images/Login.png'
import ChecksRadios from '../../forms/checks-radios/ChecksRadios.js'
import Dashboard from 'src/views/dashboard/Dashboard'
import DefaultLayout from 'src/layout/DefaultLayout'
// import UserContext from '../../../context/UserContext'

const Login = () => {
  const [user, setUser] = useState()
  const [path, setPath] = useState()
  // const { dispatch } = useContext(UserContext)
  const navigate = useNavigate()
  // localStorage.setItem('user', null)
  const handleChange = (e) => {
    e.preventDefault()
    // const value = e.target.value
    setUser(e.target.value)
    localStorage.setItem('user', e.target.value)
  }
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   // dispatch({ type: 'LOGIN', payload: user })
  //   navigate('/dashboard')
  // }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center" style={{ width: '100%', height: 'auto' }}>
          <CCol md={8}>
            <CCardGroup style={{ width: '100%', height: 'auto' }}>
              <CCard style={{ width: '100%', height: 'auto' }}>
                <CCardHeader className="text-center">
                  <h3>Login</h3>
                </CCardHeader>
                <CCardBody>
                  <CForm>
                    <ChecksRadios onChange={handleChange} />
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      {console.log(user)}
                      <CCol xs={6}>
                        {user == 'sadmin' && (
                          <Link to="/dashboard">
                            <CButton color="primary" className="px-4">
                              Login
                            </CButton>
                          </Link>
                        )}
                        {user == 'admin' && (
                          <Link to="/dashboard1">
                            <CButton color="primary" className="px-4">
                              Login
                            </CButton>
                          </Link>
                        )}
                        {user == 'user' && (
                          <Link to="/dashboard1">
                            <CButton color="primary" className="px-4">
                              Login
                            </CButton>
                          </Link>
                        )}
                        {/* </UserContext.Provider> */}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                      <CCol>
                        <p className="py-5">
                          New User?
                          <Link to="/register" style={{ textDecoration: 'none' }}>
                            {' '}
                            Register
                          </Link>
                        </p>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-black py-5 content center"
                style={{ width: '100%', height: 'auto' }}
              >
                <CCardBody
                  className="text-center m-auto"
                  style={{ display: 'flex' }}
                  justify-content-center
                >
                  <div className="m-auto">
                    <img style={{ width: '100%', height: 'auto' }} src={image} alt="Image"></img>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
