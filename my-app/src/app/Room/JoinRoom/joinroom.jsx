'use server'

import axios from "axios"

export async function JoinRoom(formData){
    axios.post('http://localhost:3001/Room/',formData.get('Id'))
}