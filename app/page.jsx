import HomeBanner from "@/app/components/Home/HomeBanner";
import RecentBlogs from "@/app/components/Home/RecentBlogs";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto min-h-full flex flex-col mt-4">
      <HomeBanner />
      <RecentBlogs />
    </main>
  );
}
