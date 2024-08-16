
import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "./MainOutlet";
import UsersHome from "../user/UsersHome";
import UserServices from "../user/UserServices";
import UserClientStories from "../user/UserClientStories";
import UserCareer from "../user/UserCareer";
import UserContact from "../user/UserContact";
import AdminPanelCheck from "../admin/AdminPanelCheck";
// import AdminHome from "../admin/AdminHome";
import { Buffer } from 'buffer';
import AdminShowUserData from "../admin/AdminShowUserData";
// import AdminShowUserMessage from "../admin/AdminShowUserMessage";
import Policy from "./Policy";
import UserAboutUs from "../user/UserAboutUs";
import AdminCareer from "../admin/AdminCareer";
import UserCareerData from "../user/UserCareerData";
import AdminJobPost from "../admin/AdminJobPost";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainOutlet></MainOutlet>,
      children:[
        {
          path:'/',
          element:<UsersHome></UsersHome>
        },
        {
          path:'/services',
          element:<UserServices></UserServices>
        },
        {
          path:'/clientstories',
          element:<UserClientStories></UserClientStories>
        },
        {
          path:'/career',
          loader:()=>fetch('http://localhost:5000/adminCareer'),
          element:<UserCareer></UserCareer>
        },
       {
        path:'/contact',
        element:<UserContact></UserContact>
       },
       {
        path:'/aboutus',
        element:<UserAboutUs></UserAboutUs>
       },
       {
        path:'/privacypolicy',
        element:<Policy></Policy>
       },
       {
        path:'/policy',
        element:<Policy></Policy>
     },
      ]
    },
    {
      path:'/userCareerData/:id',
      loader:({params})=>{
        const atob = (str) => Buffer.from(str,'base64').toString('binary');
        return fetch(`http://localhost:5000/userCareerData/${atob(params.id)}`)
        //fetch(`http://localhost:5000/userCareerData/${params.id}`)
      },
      element:<UserCareerData></UserCareerData>
    },
    {
      path:'/andromedaitadminpanel',
      element:<AdminPanelCheck></AdminPanelCheck>
    },
  //    {
  //      path:'/adminShow',
  //    element:<AdminHome></AdminHome>
  //  },
   {
    path:'/adminshowuserData',
    element:<AdminShowUserData></AdminShowUserData>
   },
   {
    path:'/admincareer',
    element:<AdminCareer></AdminCareer>
   },{
    path:'/adminjobpost',
    element:<AdminJobPost></AdminJobPost>
   }
  //  {
  //   path:'/m',
  //   element:<AdminShowUserMessage></AdminShowUserMessage>
  //  }   
  ]);

export default router;