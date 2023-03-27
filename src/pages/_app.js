import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Layout>
        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}
