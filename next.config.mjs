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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkhvdGVsIHRva2VuIC9Eb24ndCB0b3VjaC8iLCJjcmVhdGVkQXQiOiIyMDI0LTEyLTE2VDA1OjMwOjA4LjgxMVoiLCJ1c2VyR3JvdXBJZCI6ImxGS3YtTGl5UDE4UWZTUU1wcFhyMCIsImV4cGlyZURhdGUiOiIyMDI1LTAxLTE1VDA2OjQzOjIzLjcyN1oiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJ0X0R6X1h3U2h5bm41Z0VFMF91Y3QiLCJfX3YiOjB9LCJpYXQiOjE3MzQzMzE0MTZ9.vpkhx-rshU5acOVPXaGaW5G0a6ounFDU3yye3FoGXpo",
    NEXT_PUBLIC_CP_ID: "VJmV8qzOg_97a6Rh2OJzt",
  },
};

export default withNextIntl(nextConfig);