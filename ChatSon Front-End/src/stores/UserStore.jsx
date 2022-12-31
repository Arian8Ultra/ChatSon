import create from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      UserName: "",
      Token: "",
      Email: "",
      ID: "",
      SignedIn: false,
      signIn: (Token, UserName, ID,Email) =>
        set({
          UserName: UserName,
          Token: Token,
          SignedIn: true,
          ID: ID,
          Email:Email
        }),
      signOut: () =>
        set({
          UserName: "",
          Token: "",
          Email: "",
          ID: "",
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
