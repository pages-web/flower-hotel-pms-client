import { NavbarTop } from "./navbar-top";
import BookingNavbarTop from "./booking-navbar-top";
import BookingNavbarTopContent from "../booking-navbar-top-content/booking-navbar-top-content";
import Footer from "../footer/footer";
import CurrentUser from "@/containers/auth/current-user";
import CheckDealDuration from "./checkDealDuration";
import LanguageButton from "../language-button/language-button";

const DefaultLayout = ({
  children,
  locale,
}: React.PropsWithChildren & { locale: string }) => {
  return (
    <>
      <NavbarTop>
        <div>
          <LanguageButton locale={locale} />
          <CurrentUser />
        </div>
      </NavbarTop>
      <BookingNavbarTop>
        <BookingNavbarTopContent />
      </BookingNavbarTop>
      <CheckDealDuration />
      {children}
      <Footer />
    </>
  );
};
export default DefaultLayout;
