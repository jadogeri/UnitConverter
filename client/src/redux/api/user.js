import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    forgotPassword: builder.mutation({
        query: ({ email} ) => ({
            url: "/user/forgot",
            method: "PUT",
            body: {email : email},
        })
    }),
    resetPassword: builder.mutation({
        query: ({email, new_password, current_password}) => ({
            url: "/user/reset",
            method: "PUT",
            body: {email : email, new_password : new_password, current_password : current_password}
      })
  }),
    login: builder.mutation({
        query: ({ password, email}) => ({
            url: "/user/login",
            method: "POST",
            body: { email : email, password : password},
        })
    }),
    contact : builder.mutation({
        query: ({ email, name, subject , message}) => ({
            url: "/user/contact",
            method: "POST",
            body: { email : email, name: name, subject: subject, message: message},
        })
    }),

    register: builder.mutation({
      query: ({ username ,password, email}) => ({
          url: "/user/register",
          method: "POST",
          body: {username : username, email : email, password : password},
      })
  }),
  
    logout: builder.mutation({
        query: ( {token }) => ({
            url: "/user/logout",
            method: "DELETE",
            body: {token : token},
        })
    }),  
    deactivate: builder.mutation({
      query: ( {confirm_delete ,password, email}) => ({
          url: "/user/deactivate",
          method: "DELETE",
          body: {confirm_delete : confirm_delete, email : email, password : password},
      })
  
  })
  }),

})

export const {
  
    useRegisterMutation,
    useDeactivateMutation,
    useLoginMutation,
    useLogoutMutation,
    useContactMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,  

} = userApiSlice;