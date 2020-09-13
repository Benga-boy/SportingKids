import axios from 'axios'
import { getToken } from './auth'

const skUrl = '/api'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

// * Function to get an event
export const getEvent = () => {
  return axios.get(`${skUrl}/events`)
}


// * Function to create an event
export const createEvent = (file, formData) => {
  return axios.post(`${skUrl}/events`, file, formData, withHeaders())
}


// * Function to edit an event
export const editEvent = (id, formData) => {
  return axios.put(`${skUrl}/events/${id}`, formData, withHeaders())
}


// * Function to delete an event
export const deleteEvent = (id) => {
  return axios.delete(`${skUrl}/events/${id}`, withHeaders())
}


// * Function to login
export const loginUser = formData => {
  return axios.post(`${skUrl}/login`, formData)
}