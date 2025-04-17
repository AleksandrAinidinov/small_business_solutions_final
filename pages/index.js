// Aleksandr Ainidinov
// 8905450
// 2025-04-17

import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AddOrderForm from "../components/AddOrderForm";
import AllOrders from "../components/AllOrders";

export default function Home() {
  return (
    <>
      <Head>
        <title>Customer Orders Management System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <div> 

          <h1 className={styles.formHeader}>Customer Orders Management System</h1>

          {/* Add New Item Form */}
          <AddOrderForm />

          {/* All Orders */}
          <AllOrders />
        </div>
      </div>
    </>
  );
}
