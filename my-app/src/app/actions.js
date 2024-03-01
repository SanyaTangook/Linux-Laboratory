'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function login(formData) {
  const Data = {
    User: formData.get('email'),
    Pass: formData.get('password')
  }
  if (Data.User ==='Tadmin' && Data.Pass === '1234'){
    cookies().set('role' , 'teacher')
    redirect('/Home')
  }else if(Data.User === 'Sadmin' && Data.Pass === '1111') {
    cookies().set('role' , 'student')
    redirect('/Home')
  }
}