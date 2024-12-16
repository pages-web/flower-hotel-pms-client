import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://office.erxes.io/gateway",
    NEXT_PUBLIC_MAIN_SUBS_DOMAIN: "ws://office.erxes.io/graphql",
    NEXT_PUBLIC_PIPELINE_ID: "yltvrZmWA-mYyYdymJYVt",
    NEXT_PUBLIC_CATEGORY_ID: "wNH-KYcAuhX12DLDJFlr4",
    NEXT_PUBLIC_EXTRAS_ID: "W0ZxDgTkjsbN9d7687_n6",
    NEXT_PUBLIC_ROOT_CATEGORY_ID: "Zz683tChOneOICphFwpI-",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkhvdGVsIHRva2VuIC9Eb24ndCB0b3VjaC8iLCJjcmVhdGVkQXQiOiIyMDI0LTEyLTE2VDA5OjMzOjE2LjYwNVoiLCJ1c2VyR3JvdXBJZCI6ImxGS3YtTGl5UDE4UWZTUU1wcFhyMCIsImV4cGlyZURhdGUiOiIyMDI1LTAxLTE1VDE1OjA1OjA3LjY2NloiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJQNEV3VU5MeGx6cTFCMFdMV2F2WkEiLCJfX3YiOjB9LCJpYXQiOjE3MzQzNjE1MjJ9.Yk52F9oR-MPJP4FhxBlaAvVdYyKAc3aekPHnAetrgUk",
    NEXT_PUBLIC_CP_ID: "VJmV8qzOg_97a6Rh2OJzt",
  },
};

export default withNextIntl(nextConfig);