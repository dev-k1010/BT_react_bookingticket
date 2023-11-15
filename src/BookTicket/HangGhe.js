import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "./bookTicketAction/bookTicketAction";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      // Trạng thái ghế đã được đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      // Xét trạng thái đang đặt ghế
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat} mr-1`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="pl-4 ml-1 rowNumber">{hang.soGhe}</button>;
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe == 0) {
      return (
        <div className="ml-1">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-left mt-3
"
        style={{ fontSize: 25 }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.ticketReducer.danhSachGheDangDat,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
