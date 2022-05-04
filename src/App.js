import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';


const customer = {
  'name': '김민성',
  'birthday': '990126',
  'gender': '남자',
  'job': '대학생'
}
class App extends Component{
  render(){
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
