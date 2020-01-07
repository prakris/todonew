import './App.css';
import React, { Component } from 'react';
import { FormApp } from './FormApp';
import {Container , Col, Button, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCheckDouble } from '@fortawesome/free-solid-svg-icons'

class App extends Component 
{
  constructor(props) {
    super(props);
    this.state={
      inputval : '',
      data : [],
      index: '',
      editStatus :  false,
    }
  }

  handleChange = (e) => { 
    this.setState({ inputval : e.target.value }) 
  }

  handleEdit = (id) => {  
 let editData=   this.state.data.find(cd=>cd.id===id)
 this.setState({ inputval : editData.str,
  editStatus : true,id:id })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let newData=this.state.data;
    console.log(newData)
    if(this.state.editStatus) {
      let editData= newData.find(cd=>cd.id===this.state.id)
      editData.str=this.state.inputval;
      this.setState({
        data : newData,
        inputval: '',
        editStatus : false 
      })
    }  
    else {
      let str=this.state.inputval;
      let newDate = new Date()
      newData.push({id: newDate.getTime(), str, objectStatus:false});
      this.setState({data : newData, inputval: ''})
    }
  }

  handleRemove = (id) => {
    let newArr=this.state.data;
    let index = this.state.data.findIndex(t => t.id === id)
    newArr.splice(index,1);
    this.setState({ data : newArr});
    
  }
    

    handleComplete = (id) => {
      let newCom=this.state.data;
      let changeStatus= newCom.find(cd=> cd.id === id)
      console.log('change_status',changeStatus)
      changeStatus.objectStatus = !changeStatus.objectStatus;
      console.log('change_status',changeStatus)
      console.log('edit_status',this.state.editStatus)
      this.setState({data: newCom},console.log('edit_status2',this.state.editStatus))
    }

    
  render()
  {
    console.log(this.state)
    return( 
      <div className="header1" >
        <div className="form">
          <form >
            <h1 align="center"> ToDo </h1>
            <input type="text" value={this.state.inputval} 
             placeholder="what's in your mind"
             onChange={this.handleChange} />
           <Button type="submit" className="button1" align="center"
                disabled={this.state.inputval=== ''} 
                onClick={this.handleSubmit} >
                  {
                    <FontAwesomeIcon icon={this.state.data.editStatus ? faCheckCircle : faCheckDouble }/>
                  }
           </Button> 
          </form>
        </div> 
        <Container>
          <Row>
            <Col sm={6}>
              <h2>Uncompleted Task</h2>
              <FormApp data={this.state.data.filter(t => !t.objectStatus)} 
                handleEdit={this.handleEdit} 
                handleComplete={this.handleComplete}
                handleRemove={this.handleRemove}
                />
            </Col>
            <Col sm={6}>
              <h2>Completed Task</h2>
              <FormApp data={this.state.data.filter(t => t.objectStatus )}  
                handleEdit={this.handleEdit} 
                handleComplete={this.handleComplete}
                handleRemove={this.handleRemove}
                />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default App;
