export const LOGIN = 'login';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_USER = 'get_User';



// ถ้า type อันไหนของเราไม่มี การเรียกaction ใน index จะต้องเป็นตัวใหญ่ทั้งหมด เพราะมันต้องทำหน้าที่เป้น เเบบ dispatch({type : GET_TOKEN }) ไปในตัว 