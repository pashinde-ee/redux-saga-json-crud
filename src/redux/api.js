import axios from "axios";

export const loadUsersApi = async () => await axios.get("http://localhost:3001/users")
export const createUserApi = async (user) => await axios.post("http://localhost:3001/users", user)
export const deleteUserApi = async (userId) => await axios.delete(`http://localhost:3001/users/${userId}`)
export const updateUserApi = async (userId, userInfo) => await axios.put(`http://localhost:3001/users/${userId}`, userInfo)