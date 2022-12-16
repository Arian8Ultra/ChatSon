import create from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      UserName: "",
      FirstName: "",
      LastName: "",
      Token: "",
      Email: "",
      ID: "",
      SignedIn: false,
      signIn: (FirstName, LastName, Token, UserName, ID) =>
        set({
          UserName: UserName,
          FirstName: FirstName,
          LastName: LastName,
          Token: Token,
          SignedIn: true,
        }),
      signOut: () =>
        set({
          UserName: "",
          FirstName: "",
          LastName: "",
          Token: "",
          Email: "",
          SignedIn: false,
        }),
    }),

    {
      name: "user-store", // unique name
      getStorage: () => sessionStorage,
       // (optional) by default, 'localStorage' is used
    }
  )
);

export default useUserStore;
