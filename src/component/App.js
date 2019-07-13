import React, { Component } from 'react';
import '.././App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import CreateUser from './CreateUser';
import Dulieu from '.././data.json';
const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm: true,
      data: [],
      thongtin: "",
      HienThiFormSua: false,
      ObjectSua : {}
    }
  }
  componentWillMount() {
    if(localStorage.getItem('UserData')=== null)
    {
      localStorage.setItem('UserData',JSON.stringify(Dulieu))
    }
    else{
      var temp = JSON.parse(localStorage.getItem('UserData'))
      this.setState({
        data : temp
      });
    }
  }
  Edituser = (item) => {
    this.setState({
      ObjectSua : item
    });
  }
  Nhanthongtin = (tt) => {
    this.setState({
      thongtin: tt
    });
  }
  getNewUserdata = (name, tel, permission) => {
    var item = {}
    item.id = uuidv1();
    item.name = name
    item.tel = tel
    item.permission = permission
    var items = this.state.data
    items.push(item)
    this.setState({
      data: items
    });
    localStorage.setItem('UserData',JSON.stringify(items))
  }
  thaydoitrangthai = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm
    });
  }
  GetIduser =(IdUser)=>{
    var temdata = this.state.data.filter(item => item.id !== IdUser)
    this.setState(
      {
        data : temdata
      }
    );
    localStorage.setItem('UserData',JSON.stringify(temdata))

}
  // thongbao =() =>{console.log("ten cua ban la trung hieu dep trai")}
thaydoitrangthaiSua = () => {
    this.setState({
      HienThiFormSua: !this.state.HienThiFormSua
    });
  }
  GetInfoUser = (info)=>{
    this.state.data.forEach((key)=>{
      if(key.id === info.id){
          key.name = info.name
          key.tel = info.tel
          key.permission = info.permission
      }
    })
    localStorage.setItem('UserData',JSON.stringify(this.state.data))

  }

  render() {
    var mangSearch = []
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.thongtin) !== -1) {
        mangSearch.push(item)
      }
    }
    )
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search GetInfoUser = {(info)=>this.GetInfoUser(info)}
              ObjectSua = {this.state.ObjectSua}
              SuaOng ={()=>this.thaydoitrangthaiSua()}
              TrangThaiFormSua={this.state.HienThiFormSua}
                Thongtintubo={(tt) => this.Nhanthongtin(tt)}
                thaydoi={() => this.thaydoitrangthai()} hienthi={this.state.hienthiForm} />
              <div className="col-12">
                <hr />
              </div>
              <TableData
                GetIduser = {(IdUser)=>this.GetIduser(IdUser)}
                SuaOng ={()=>this.thaydoitrangthaiSua()}
                EdituserOng={(item) => this.Edituser(item)}
                truyenData={mangSearch} />
              <CreateUser Add={(name, tel, permission) => this.getNewUserdata(name, tel, permission)} hienthi={this.state.hienthiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
