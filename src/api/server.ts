import React from 'react'

let token = 'b8ff7c7245ca806d097fe6b10f06ab364c685f7e644e4a94';

export const server_calls = {
  get: async () => {
    const response = await fetch(`http://127.0.0.1:5000/api/contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });


    if (!response.ok) {
      throw new Error('Failed to fetch data from server')
    }

    return await response.json()
  },

  create: async(data: any = {}) => {
    const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if(!response.ok){
        throw new Error('Failed to Create new data on server')
    }

    return await response.json()
},

  update: async (id: string, data: any = {}) => {
    const response = await fetch(`http://127.0.0.1:5000/api/contacts/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
  },
  delete: async (id: string) => {
    const response = await fetch(`http://127.0.0.1:5000/api/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })
  }
}