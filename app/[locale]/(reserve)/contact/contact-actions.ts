// app/[locale]/(reserve)/contact/contact-actions.ts
"use server";

import { getClient } from "@/sdk/ssClient";
import { gql } from "@apollo/client";

const WIDGETS_SAVE_LEAD = gql`
  mutation widgetsSaveLead(
    $formId: String!
    $submissions: [FieldValueInput]
    $browserInfo: JSON!
    $cachedCustomerId: String
  ) {
    widgetsSaveLead(
      formId: $formId
      submissions: $submissions
      browserInfo: $browserInfo
      cachedCustomerId: $cachedCustomerId
    ) {
      status
      conversationId
      customerId
      errors {
        fieldId
        code
        text
      }
    }
  }
`;

export async function sendLead(params: {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}) {
  const formId = "lZEPvPaDCNeqG8iK6mDk5";
  const browserInfo = {};
  const cachedCustomerId = undefined;

  const submissions = [
    {
      _id: "email",
      value: params.email,
      text: "Email",
    },
    {
      _id: "firstName",
      value: params.firstName,
      text: "First Name",
    },
    {
      _id: "lastName",
      value: params.lastName,
      text: "Last Name",
    },
    {
      _id: "phone",
      value: params.phone.toString(),
      text: "Phone",
    },
    {
      _id: "message",
      value: params.message,
      text: "Message",
    },
  ];

  try {
    const { data } = await getClient().mutate({
      mutation: WIDGETS_SAVE_LEAD,
      variables: { formId, submissions, browserInfo, cachedCustomerId },
    });
    return data?.widgetsSaveLead;
  } catch (error) {
    console.error("Error sending lead:", error);
    throw error;
  }
}
