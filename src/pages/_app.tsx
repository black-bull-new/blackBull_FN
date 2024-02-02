import "@/styles/globals.css";
import "@/styles/color.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: true,
            retry: false,
            refetchOnMount: true,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  const router = useRouter();
  const currentUrl = router.asPath;
  console.log(currentUrl, "url:");
  return (
    <QueryClientProvider client={queryClient}>
      {currentUrl === "/login" ||
      currentUrl === "/signup" ||
      currentUrl === "/subscription-plan" ||
      currentUrl === "/" ||
      currentUrl === "/login/update-password" ||
      currentUrl === "/login/update-password?" ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <Header />
          <div className="sticky top-0">
            <Sidebar />
          </div>
          <Component {...pageProps} />
          <div className="fixed bottom-0 w-full">
            <Footer />
          </div>
        </>
      )}
    </QueryClientProvider>
  );
}
