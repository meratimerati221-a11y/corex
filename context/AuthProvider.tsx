"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { AuthContext } from "./AuthContext";
import type { User } from "@supabase/supabase-js";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    supabase.auth.getSession()
      .then(({ data }) => {
        setUser(data.session?.user ?? null);
        setLoading(false);
      });


    const {
      data: listener,
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );


    return () => {
      listener.subscription.unsubscribe();
    };

  }, []);


  async function signOutUser() {
    await supabase.auth.signOut();
    setUser(null);
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}