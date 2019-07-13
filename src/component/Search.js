import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trunggian: "",
            ObjectEdit: {}
        }
    }
    ShowFormSua = () => {
        if (this.props.TrangThaiFormSua === true) {
            return <EditUser EditUser={(item) => { this.EditUser(item) }} ObjectSua={this.props.ObjectSua}
                SuaCha={() => this.props.SuaOng()} />
        }
    }
    EditUser = (item) => {
        this.setState({
            ObjectEdit: item
        });
        this.props.GetInfoUser(item)
    }
    Laythongtin = (event) => {
        this.setState({
            trunggian: event.target.value
        });
        this.props.Thongtintubo(this.state.trunggian)
    }
    hienThitrangthai = () => {
        if (this.props.hienthi === true) {
            return <div onClick={() => this.props.thaydoi()} className="btn btn-block btn-outline-secondary">Đóng lại</div>
        }
        else {
            return <div onClick={() => this.props.thaydoi()} className="btn btn-block btn-outline-primary">Thêm mới</div>

        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.ShowFormSua()}
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event) => this.Laythongtin(event)} name="hieu" type="text" className="form-control" placeholder="điền thông tin tìm kiếm  " style={{ width: '622px' }} />
                        <div className="btn btn-info" onClick={(tt) => this.props.Thongtintubo(this.state.trunggian)}>tìm</div>
                    </div>
                    {this.hienThitrangthai()}
                </div>
            </div>

        );
    }
}

export default Search;