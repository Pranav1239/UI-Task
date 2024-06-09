import UserDashboardContact from "@/components/UserDashboardContact";
import UserDashboardEngagement from "@/components/UserEngagement/UserDashboardEngagement";
import UserDashboardTabs from "@/components/UserDashboardTabs/UserDashboardTabs";
import UserProfileTab from "@/components/UserProfileTab";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mx-auto px-4">
      <section className="mt-8 mb-4 p-3">
        <UserProfileTab />
      </section>
      <section className="mb-4 p-3">
        <UserDashboardTabs />
      </section>
      <section className="flex flex-col lg:flex-row ">
        <div className="flex-[4]">
          <UserDashboardContact />
        </div>
        <div className="flex-[6]">
          <UserDashboardEngagement />
        </div>
      </section>
    </main>
  );
}
