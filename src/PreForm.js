import React ,{ Component } from 'react';
import './App.css';
import { Button , Col ,Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faCheckSquare, faAd } from '@fortawesome/free-solid-svg-icons'


export default class FormApp extends Component {
    
  
    render()
    {
     return(
           <div>
              <ul >
                 {this.props.data.map((item, index) => {
                    return (
                      <li key={index}>
                        <Row>
                            <Col sm={9}>
                            <span style={{ textDecoration : !item.objectStatus ?
                            'none' : 'line-through' }}>
                                {item.str}
                            </span>
                            </Col>    
                                <Col sm={1}>
                                <Button className="button1" onClick={() => this.props.handleComplete(item.id)}>
                                    {
                                    <FontAwesomeIcon icon={ !this.props.data[index].objectStatus ? faCheckSquare : faAd }/> 
                                    }    
                                </Button> 
                                </Col>
                                <Col sm={1}>
                                <Button className="button1" onClick={() => this.props.handleRemove(item.id)}>
                                    <FontAwesomeIcon icon={faTrashAlt}/>
                                </Button>
                                </Col>
                                <Col sm={1}>          
                                <Button className="button1" onClick={() => this.props.handleEdit(item.id)}>                     
                                    <FontAwesomeIcon icon={faEdit}/>
                                </Button>
                                </Col>            
                                    </Row>
                              </li>
                            );                
                      })}
                 </ul>
           </div>                           
  );         
 }         
}      