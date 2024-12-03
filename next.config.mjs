// import autoCert from "anchor-pki/auto-cert/integrations/next";
// import nextIntl from "next-intl"; // Use the default export from next-intl
// import createNextIntlPlugin from "next-intl/plugin";

// const withAutoCert = autoCert({
//   enabledEnv: "development",
//   allowIdentifiers: ["hotel-xm.lcl.host"], // Add your domain here
//   acmeChallengeServer: true, // Ensure ACME challen
//   httpsPort: 44311,
// });

// const withNextIntl = createNextIntlPlugin();

// const nextConfig = {

// };

// // Compose the plugins
// export default withAutoCert(withNextIntl(nextConfig));

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "http://localhost:4000",
    NEXT_PUBLIC_MAIN_SUBS_DOMAIN: "ws://localhost:4000/graphql",
    NEXT_PUBLIC_PIPELINE_ID: "MAZjRBrYqyc8pLwDUUqit",
    NEXT_PUBLIC_CATEGORY_ID: "NzL4ujauXwDnr2YXQ7wZR",
    NEXT_PUBLIC_EXTRAS_ID: "IAXTsv5semM6TtkL7WAoK",
    NEXT_PUBLIC_ROOT_CATEGORY_ID: "uJbP19-R7pKZDsui6fHdw",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IndlYiIsImNyZWF0ZWRBdCI6IjIwMjQtMTEtMjdUMDg6MjM6NDQuMjkzWiIsInVzZXJHcm91cElkIjoiZ3RiSW1NdmdXRno3WGNGbnNfanNWIiwiZXhwaXJlRGF0ZSI6IjIwMjQtMTItMjdUMDg6NDk6MTguMjQ2WiIsIm5vRXhwaXJlIjp0cnVlLCJhbGxvd0FsbFBlcm1pc3Npb24iOnRydWUsIl9pZCI6IjJTNG9DZnF1enRUTHd6V3VfMFBiQSIsIl9fdiI6MH0sImlhdCI6MTczMjY5NzM2MX0.044I4OvZUSM-Yy7NFnYxM38XN_xO-iIIqXq0pCthvxQ",
    NEXT_PUBLIC_CP_ID: "TUNuC8L13stQkJ1Ksmfk1",

    NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
      "pk_test_51QOyt3LO8jF026ernW4qrJ0tYoHyqXwb0FN6ISfgWb2uBsXFDgC6IXFTijThHLY2w54OKCEgRq2ySmdcnAZF6K2l00yyRtTGK4",
    STRIPE_SECRET_KEY:
      "sk_test_51QOyt3LO8jF026erWxTbm7VuF7vbYWgxAK5RHRkmtfaEM8g4aRPfU5HJHSBVhsQKiMknaoto4Eg0L7t3i4aVKJAb00pXUOyDVg",
  },
};

export default withNextIntl(nextConfig);

// import autoCert from "anchor-pki/auto-cert/integrations/next";
// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// const withAutoCert = autoCert({
//   enabledEnv: "development",
// });

// const nextConfig = {
//   env: {
//     NEXT_PUBLIC_MAIN_API_DOMAIN: "http://localhost:4000",
//     NEXT_PUBLIC_MAIN_SUBS_DOMAIN: "ws://localhost:4000/graphql",
//     NEXT_PUBLIC_PIPELINE_ID: "MAZjRBrYqyc8pLwDUUqit",
//     NEXT_PUBLIC_CATEGORY_ID: "NzL4ujauXwDnr2YXQ7wZR",
//     NEXT_PUBLIC_EXTRAS_ID: "IAXTsv5semM6TtkL7WAoK",
//     NEXT_PUBLIC_ROOT_CATEGORY_ID: "uJbP19-R7pKZDsui6fHdw",
//     NEXT_PUBLIC_ERXES_APP_TOKEN:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IndlYiIsImNyZWF0ZWRBdCI6IjIwMjQtMTEtMjdUMDg6MjM6NDQuMjkzWiIsInVzZXJHcm91cElkIjoiZ3RiSW1NdmdXRno3WGNGbnNfanNWIiwiZXhwaXJlRGF0ZSI6IjIwMjQtMTItMjdUMDg6NDk6MTguMjQ2WiIsIm5vRXhwaXJlIjp0cnVlLCJhbGxvd0FsbFBlcm1pc3Npb24iOnRydWUsIl9pZCI6IjJTNG9DZnF1enRUTHd6V3VfMFBiQSIsIl9fdiI6MH0sImlhdCI6MTczMjY5NzM2MX0.044I4OvZUSM-Yy7NFnYxM38XN_xO-iIIqXq0pCthvxQ",
//     NEXT_PUBLIC_CP_ID: "TUNuC8L13stQkJ1Ksmfk1",

//     NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
//       "pk_test_51QOyt3LO8jF026ernW4qrJ0tYoHyqXwb0FN6ISfgWb2uBsXFDgC6IXFTijThHLY2w54OKCEgRq2ySmdcnAZF6K2l00yyRtTGK4",
//     STRIPE_SECRET_KEY:
//       "sk_test_51QOyt3LO8jF026erWxTbm7VuF7vbYWgxAK5RHRkmtfaEM8g4aRPfU5HJHSBVhsQKiMknaoto4Eg0L7t3i4aVKJAb00pXUOyDVg",
//   },
// };

// export default withAutoCert(withNextIntl(nextConfig));
