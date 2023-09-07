import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
<<<<<<< HEAD

import { api } from "~/utils/api";

import "~/styles/globals.css";
=======
import { ThemeProvider } from "@/components/theme-providers";

import { api } from "@/utils/api";

import "@/styles/globals.css";
>>>>>>> 800935d7c5162c413a188d0767ebf32e8670661c

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
<<<<<<< HEAD
      <Component {...pageProps} />
=======
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
>>>>>>> 800935d7c5162c413a188d0767ebf32e8670661c
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
