import React, { Component } from 'react';

class TableDataRow extends Component {
    permission = () =>{
        if(this.props.per === 1)
        {
            return "Admin"
        }
        else if(this.props.per === 2 )
        {
            return "moderater"
        }
        else
        {
            return "normal"
        }
    }
    EdituserCon=()=>{
        this.props.EdituserCha();
        this.props.SuaCha();
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.username}</td>
                <td>{this.props.tel}</td>
                <td>
                    {this.permission()}
                </td>
                <td>
                    <div className="btn-group">
                        <div  onClick= {()=>{this.EdituserCon()}} className="btn btn-warning sua"><i className="fa fa-edit    ">sửa</i></div>
                        <div  onClick= {(idUSer)=>{this.props.GetIduser(this.props.id)}} className="btn btn-danger xoa"><i className="fa fa-detele     ">xóa</i></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;