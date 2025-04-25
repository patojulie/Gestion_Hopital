import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

export const API = axios.create({
  baseURL: BASE_URL,
});

// User
export const register = (data) => API.post('/users/register', data);
export const login = (data) => API.post('/users/login', data);
export const getUserByRole = (role) => API.get(`/users/role/${role}`);
export const getSpecialities = ()=>API.get('/users/specialities');

// Appointments
export const createAppointment = (data) => API.post('/appointments',data);
export const getAppointmentsByPatient = (patientId) => API.get(`/appointments/${patientId}`);

// Teleconsultations
export const initTeleconsultationsForPatient = (patientId) => API.post(`/teleconsultations/init/${patientId}`);
export const getTeleconsultationsByUser = (userId, role) =>API.get(`/teleconsultations/${userId}/${role}`);
export const acceptTeleconsultation = (id) =>API.put(`/teleconsultations/accept/${id}`);
export const payTeleconsultation = (id) =>API.put(`/teleconsultations/pay/${id}`);
export const deleteTeleconsultation = (id) =>API.delete(`/teleconsultations/${id}`);



export const createConsultationSlip = (data) => API.post('/bonConsultations', data);
export const payConsultationSlip = (id) => API.put(`/bonConsultations/pay/${id}`);
export const getConsultationSlipsByPatient = (patientId) => API.get(`/bonConsultations/${patientId}`);