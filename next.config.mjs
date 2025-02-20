import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // NEXT_PUBLIC_MAIN_API_DOMAIN: process.env.NEXT_PUBLIC_MAIN_API_DOMAIN,
    // NEXT_PUBLIC_MAIN_SUBS_DOMAIN: process.env.NEXT_PUBLIC_MAIN_SUBS_DOMAIN,
    // NEXT_PUBLIC_CP_ID: process.env.NEXT_PUBLIC_CP_ID,
    // NEXT_PUBLIC_PMS_TOKEN: process.env.NEXT_PUBLIC_PMS_TOKEN,
    // NEXT_PUBLIC_ROOT_CATEGORY_ID: process.env.NEXT_PUBLIC_ROOT_CATEGORY_ID,
    // NEXT_PUBLIC_APP_TOKEN: process.env.NEXT_PUBLIC_APP_TOKEN,

    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://tourism.app.erxes.io/gateway",
    NEXT_PUBLIC_MAIN_SUBS_DOMAIN: "ws://tourism.api.erxes.io/api/graphql",
    NEXT_PUBLIC_CP_ID: "XT4csSMkCWe43MFlyUTk_",
    NEXT_PUBLIC_PMS_TOKEN: "cplOSUugJWEsxHRjbD8N1jzuVdsPmwN8",
    NEXT_PUBLIC_ROOT_CATEGORY_ID: "Vz0J0QhpjQHDTZ5ssK-8a",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkhvdGVsIHRva2VuIiwiY3JlYXRlZEF0IjoiMjAyNS0wMS0yN1QwNzowMTo0MC44NzdaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI1LTAyLTI2VDEwOjM2OjQ0LjQ3M1oiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJ5NjZTTlRKZW9jd1VhYVFqWU5FVHciLCJfX3YiOjB9LCJpYXQiOjE3Mzc5NzQyMTV9.lLwFmzMudhQK9hu3WatkS4LlXYgMJEq4Zf4CbWzkmno",
  },
};

export default withNextIntl(nextConfig);
