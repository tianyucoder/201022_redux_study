import {ADD_PERSON} from '../constant'

//创建加一个人的action
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})
