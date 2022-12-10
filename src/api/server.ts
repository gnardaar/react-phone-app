import React from 'react'

let token = '....................................................place honebook token here........................................................................';

export const server_calls = {
  get: async () => {
    const response = await fetch(`...................................place phonebook glitch app here.........................................`, {
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
    const response = await fetch(`.................................................place phonebook glitch app here.........................................................`,{
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
    const response = await fetch(`....................................................place phonebook flask app here.................................../${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
  },
  delete: async (id: string) => {
    const response = await fetch(`///////////////////////////////////////////////////add phonebook flask app here\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })
  }
}