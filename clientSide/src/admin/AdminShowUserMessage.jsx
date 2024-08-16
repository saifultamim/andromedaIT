// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";


// const AdminShowUserMessage = () => {
//     const [message,setMessage]=useState([])
//     const data = useLocation()
//     useEffect(()=>{
//         axios.post('http://localhost:5000/userMessageShow',data)
//         .then(data=>setMessage(data.data))
//     },[])
//     console.log('location   ',data.state.user.firstName)
//     const navigate = useNavigate();
//     const backPage = () => {
//         navigate('/s')
//     }
//     return (
//         <div>
//             {/* <h2>{data.state.user.message}</h2> */}
//            {
//             message && message.map((data)=><div key={data._id}>
//                 <h2>{data.message || 'ok fine'}</h2>
//             </div>)
//            }
//             <button onClick={backPage}>Back</button>
//         </div>
//     );
// };

// export default AdminShowUserMessage;