import React from "react";
import DashboardCard from "./components/DashboardCard"
import DashboardEmpty from "./components/DashboardEmpty"
export const DashboardPage = () => {
  const cartList = []
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {cartList.length && cartList.map(()=>(
          <DashboardCard/>
        ))}
      </section>
      {!cartList.length && <DashboardEmpty/>}
    </main>
  );
};

export default DashboardPage;
