import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    HienthiData = () => {
        return (
            this.props.truyenData.map((value, key) =>(
                <TableDataRow GetIduser = {(IdUser)=>{this.props.GetIduser(IdUser)}}  id = {value.id} SuaCha={()=>this.props.SuaOng()} EdituserCha ={(item)=>this.props.EdituserOng(value)} username={value.name} key={key} stt={key}
                tel={value.tel} per={value.permission} />
                )
            )
        )
    }

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.HienthiData() }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;