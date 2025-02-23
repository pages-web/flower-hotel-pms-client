import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://flowerhotel.app.erxes.io/gateway",
    NEXT_PUBLIC_MAIN_SUBS_DOMAIN: "ws://flowerhotel.app.erxes.io/api/graphql",
    NEXT_PUBLIC_CP_ID: "E-J2jkBz4_DBy3qkrPQHL",
    NEXT_PUBLIC_PMS_TOKEN: "AVpfdcnXc8yCuh5bSdzC41aAeK4Qu5S2",
    NEXT_PUBLIC_ROOT_CATEGORY_ID: "oXuvTIwqRhnmhPLhPSNER",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IlBNUyIsImNyZWF0ZWRBdCI6IjIwMjUtMDItMjBUMDY6NDM6MDQuNjk1WiIsInVzZXJHcm91cElkIjoiSndsN1V5RVFyelJNYlhLbENib0w4IiwiZXhwaXJlRGF0ZSI6IjIwMjUtMDMtMjVUMDc6MDY6MDcuNzQ3WiIsIm5vRXhwaXJlIjp0cnVlLCJhbGxvd0FsbFBlcm1pc3Npb24iOnRydWUsIl9pZCI6InpicXN1UUhwTXJtXzUySWhJSFFxWiIsIl9fdiI6MH0sImlhdCI6MTc0MDI5NDM3N30.6eSU7KQFJiKweSOm17aI2q6cmtypz4Zx0CCjyVdlFoQ",
  },
};

export default withNextIntl(nextConfig);
