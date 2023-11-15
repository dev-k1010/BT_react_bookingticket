import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "./conts/conts";
import { huyGheAction } from "./bookTicketAction/bookTicketAction";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-5 flex-column">
        <div>
          <button className="gheDuocChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "25px" }}>
            Ghế đã đặt
          </span>
        </div>
        <div>
          <button className="gheDangChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "25px" }}>
            Ghế đang đặt
          </span>
        </div>
        <div>
          <button className="ghe"></button>
          <span className="text-light ml-2" style={{ fontSize: "25px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div
          className="mt-5 "
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <table className="table " border={2}>
            <thead>
              <tr className=" text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: 20, color: "yellow" }}>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        style={{ fontSize: 20, color: "red" }}
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot style={{ fontSize: 20, color: "yellow" }}>
              <tr>
                <td>Tổng tiền: </td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongtien, gheDangDat, index) => {
                      return (tongtien += gheDangDat.gia);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.ticketReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
