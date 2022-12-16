import React from 'react'

let token = 'a154d1e08bec7dd0f1a7132a0f14cef5bd1885927e01e877';

export const server_calls = {
  get: async () => {
debugger
    const response = await fetch(`https://glitch.com/~storm-giant-drug/`, {
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
    const response = await fetch(`hhttps://glitch.com/~storm-giant-drug/api/contacts`,{
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
    const response = await fetch(`https://glitch.com/~storm-giant-drug/api/contacts${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
  },
  delete: async (id: string) => {
    const response = await fetch(`https://glitch.com/~storm-giant-drug/api/contacts${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })
  }
}