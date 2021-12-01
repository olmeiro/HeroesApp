
//este es el state que vamos a manejar:
// const state = {
//   name: 'Olmeiro',
//   logged: true
// }

import { types } from "../types/types";

//Así va lucir el action:
// const loginAction = {
//   type: types.login,
//   payload: {
//     name: 'olmeiro',
//     email: 'olme@gmail.com'
//   }
// }

export const authReducer = (state= {}, action) => {
  switch (action.type) {
    case types.login:
        return {
          //name: action.payload.name, es lo mismo que:
          ...action.payload,
          logged: true
        }
    case types.logout:
      return {
        logged: false
      }
  
    default:
      return state;
  }
}