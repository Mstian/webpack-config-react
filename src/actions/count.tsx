import { ADDNUMBER, MINNUMBER, ADDTWO } from 'Src//constants';
export const addNumber = () => {
  return {
    type: ADDNUMBER,
    payload: {},
  };
}
export const minNumber = () => {
  return {
    type: MINNUMBER,
    payload: {}
  }
}
export const addTwo = (two: any) => {
  return {
    type: ADDTWO,
    payload:{two}
  }
}