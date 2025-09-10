import CategoryTabs from "@/components/category-tabs/category-tabs";
import Heading from "@/components/heading/heading";
import { PropsWithChildren } from "react";
import { useTranslations } from "next-intl";
const AccommodationLayout = ({ children }: PropsWithChildren) => {
  const categories = [
    { name: "Hotel room", path: "/accommodation" },
    { name: "Suites", path: "/accommodation/suites" },
    { name: "Signature suites", path: "/accommodation/signatures-suites" },
    { name: "Homes", path: "/accommodation/homes" },
  ];

  const t = useTranslations("restran");
  return (
    <div className="min-h-screen container space-y-10 py-20">
      <Heading title={t("restran")} />
      {children}
    </div>
  );
};
export default AccommodationLayout;
