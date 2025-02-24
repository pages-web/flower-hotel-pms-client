import CategoryTabs from "@/components/category-tabs/category-tabs";
import Heading from "@/components/heading/heading";
import { PropsWithChildren } from "react";

const AccommodationLayout = ({ children }: PropsWithChildren) => {
  const categories = [
    { name: "Hotel room", path: "/accommodation" },
    { name: "Suites", path: "/accommodation/suites" },
    { name: "Signature suites", path: "/accommodation/signatures-suites" },
    { name: "Homes", path: "/accommodation/homes" },
  ];
  return (
    <div className="min-h-screen container space-y-10 py-20">
      <Heading title="Top Trending Hotel Rooms Views" />
      {children}
    </div>
  );
};
export default AccommodationLayout;
