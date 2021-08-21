import axios from "axios";
import { createAction } from ".";
import { actionType } from "./type";

//tạo ra 1 async action để fetch ds khoá học
export const fetchCourses = async (dispatch) => {
  //side-effect: những hành động thay đổi 1 state nằm ngoài scope của function
  try {
    const res = await axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "GET"
      // params: {
      //   MaNhom: "GP01",
      // },
    });

    dispatch(createAction(actionType.SET_COURSES, res.data));
  } catch (err) {
    console.log(err);
  }
};

// export const fetchCourse = (id) => {
//   // return asyn action
//   return async (dispatch) => {
//     try {
//       const res = await axios({
//         url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
//         method: "GET",
//         params: {
//           maKhoaHoc: id,
//         },
//       });
//       // 1.dispatch action lên store để lưu cái detail
//       //  (tạo dữ liệu courseDetail trên reducer, createAction, actionType)

//       // 2. ở component Detail, lấy dữ liệu xuống và show ra màn hình (hình ảnh, 
//       // tên khoá, mô tả, người tạo...)
      
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
