import Layout from "@/components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <section className=" h-2/4 sm:h-screen flex flex-col">
      <Layout>
        <Main />
      </Layout>
    </section>
  );
}
