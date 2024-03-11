// import { io } from 'socket.io-client';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { FaBell } from 'react-icons/fa';
// import { DatePicker, Space } from 'antd';
// import { useSelector } from 'react-redux';
// import { AppState } from '../../../store';
// const { RangePicker } = DatePicker;
// import { Dayjs } from 'dayjs';
// import { RangeValue } from 'rc-picker/lib/interface';
// import { getNotificationAPI, updateNotificationAPI } from '../../../apis/notification';
// import { getListNotificationAction } from '../../../store/actions/notification.action';
// import { NotificationResponse } from '../../../apis/notification/responses/notification.response';
// import { NotificationRequest } from '../../../apis/notification/requests/notification.request';
// import './notification.scss';
// const socket = io(`${import.meta.env.VITE_BACK_END}`);

// const Notification = () => {
//   const dispatch = useDispatch();
//   const [notifications, setNotifications] = useState<NotificationResponse[]>([]);
//   const dataNotification = useSelector((state: AppState) => state.notificationReducer);
//   const [isValidate, setIsValidate] = useState<boolean>(false);
//   const [isShowList, setIsShowList] = useState(false);
//   const [dateTime, setDateTime] = useState<NotificationRequest>({
//     startDate: '',
//     endDate: '',
//   });
//   const todo = 1;
//   const limit = 5;
//   const handleNotification = async () => {
//     try {
//       const response = await getNotificationAPI(todo);
//       const slicedData = dataNotification.length > 0 ? dataNotification.slice(0, limit) : [];
//       setNotifications(slicedData);
//       dispatch(getListNotificationAction(response.data));
//     } catch (error) {
//       throw new Error();
//     }
//   };

//   useEffect(() => {
//     handleNotification();
//     socket.on('newNotification', () => {
//       handleNotification();
//     });
//     return () => {
//       socket.disconnect();
//     };
//   }, [dateTime]);

//   useEffect(() => {
//     const slicedData = dataNotification.length > 0 ? dataNotification.slice(0, limit) : [];
//     setNotifications(slicedData);
//   }, [dataNotification]);

//   useEffect(() => {
//     const container = document.getElementById('mainRightContainer');
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//     }
//     return () => {
//       if (container) {
//         container.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, [notifications, isShowList]);
//   const handleDateChange = (dates: RangeValue<Dayjs>) => {
//     const startDate = dates?.[0]?.format('YYYY/MM/DD');
//     const endDate = dates?.[1]?.format('YYYY/MM/DD');

//     setDateTime({
//       startDate: startDate,
//       endDate: endDate,
//     });
//   };

//   const handleSearch = async () => {
//     if (
//       dateTime.startDate === '' ||
//       dateTime.endDate === '' ||
//       dateTime.startDate === undefined ||
//       dateTime.endDate === undefined
//     ) {
//       return setIsValidate(true);
//     }
//     const response = await getNotificationAPI(todo, dateTime);
//     dispatch(getListNotificationAction(response.data));
//     return setIsValidate(false);
//   };

//   const handleDetail = async (id: number) => {
//     const itemNotification = dataNotification.find(
//       (item: NotificationResponse) => item.id === id && item.isSeen === false,
//     );
//     if (itemNotification) {
//       await updateNotificationAPI(id, { isSeen: true });
//       handleNotification();
//     }
//   };

//   const fetchMoreData = () => {
//     const startIndex = notifications.length;
//     const newData = dataNotification.slice(startIndex, startIndex + 3);
//     setNotifications((prevItems) => {
//       const mergedData = [...prevItems];
//       for (let i = 0; i < newData.length; i++) {
//         const existingIndex = mergedData.findIndex((item) => item.id === newData[i].id);
//         if (existingIndex === -1) {
//           mergedData.push(newData[i]);
//         }
//       }

//       return mergedData;
//     });
//   };

//   const handleScroll = () => {
//     const container = document.getElementById('mainRightContainer');
//     if (container) {
//       const scrollTop = container.scrollTop;
//       const scrollHeight = container.scrollHeight;
//       const clientHeight = container.clientHeight;
//       if (scrollTop + clientHeight >= scrollHeight - 200) {
//         fetchMoreData();
//       }
//     }
//   };

//   const seenCount = dataNotification.reduce((count, item) => count + (item.isSeen === false ? 1 : 0), 0);
//   return (
//     <div className="bell">
//       <FaBell className="text-white" onClick={() => setIsShowList((prev) => !prev)} />
//       <div className="count-seen">{seenCount}</div>
//       {isShowList && (
//         <div className="show-list-notify">
//           <div className="d-flex m-2">
//             <Space direction="vertical" size={12}>
//               <RangePicker onChange={handleDateChange} />
//             </Space>
//             <button className="btn-search flex-2 mt-2" onClick={handleSearch}>
//               Tìm kiếm
//             </button>
//           </div>
//           {isValidate && <i className="error-text">Chọn khoảng thời gian mà bạn muốn</i>}
//           {notifications.length > 0 ? (
//             <ul style={{ height: '200px', overflow: 'auto' }} id="mainRightContainer">
//               {notifications?.map((item: NotificationResponse, index: number) => {
//                 return (
//                   <li key={index} onClick={() => handleDetail(item.id)}>
//                     <p title={item.notification.title}>{item.notification.title}</p>
//                     <div className="d-flex justify-content-around">
//                       <span>Start date: {item.notification.startDate}</span>
//                       <span>End date: {item.notification.endDate}</span>
//                     </div>
//                     {item.isSeen === false && <div className="red-dots"></div>}
//                   </li>
//                 );
//               })}
//             </ul>
//           ) : (
//             <i className="error-text">Chưa có thông báo nào</i>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notification;



const checkDogs = function (dogsJulia, dogsKate) {
  const allDogs = [...dogsJulia, ...dogsKate];
  allDogs.forEach((dogAge, index) => {
    const dogStatus = dogAge >= 3 ? 'trưởng thành' : 'chó con';
    console.log(`Chó ${index + 1} là chó ${dogStatus} với tuổi là ${dogAge} tuổi.`);
  });
};
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);
