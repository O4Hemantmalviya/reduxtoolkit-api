import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
       query:() => ({ 
        url:'posts/1',
        method:'GET'
      
       })
      
    }),
    // getoneid:builder.query({
    //   query:(id)=>({                   //only one id find karne ke liye
    //     url:`posts/${id}`,
    //     method:'GET'
    //   })
    // })


    // getpostbylimit:builder.query({
    //   query:(num)=>{
    //     console.log("Limit Number:",num)     //limited data find karne ke liye
    //     return{
    //       url:`posts?_limit=${num}`,
    //       method:'GET'
    //     }
    //   }
    // })


  //   deletepost:builder.query({
  //     query:(id)=>{
  //       return{                                 //delit karne ke liye
  //         url:`post/${id}`,
  //         method:'DELETE'
  //       }
  //     }
  //  })

// createpost:builder.query({
//   query:(id)=>{
//     console.log("data",id)
//     return{
//       url:`posts`,
//       method:'POST',
//       body:'',
//       headers:{
//         'Content-type':'application/json; charset=UTF-8',
//       }
//   }
//      }
// })




// updatepost:builder.mutation({
//   query:(id)=>{
//     return{
// url:`posts/${id}`,
// method:'PUT',
// body:'',
// headers:{
//  'Content-type':'application/json; charset=UTF-8', 
// }
//     }
//   }
// })

  })
  })
 






// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery,useGetoneidQuery,useGetpostbylimitQuery,
useDeletepostQuery,
useCreatepostQuery,
useUpdatepostMutation,
} = postApi