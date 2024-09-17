import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const uiConfig = {
  privacyPolicyUrl: "/privacy-policy",
  termsOfServiceUrl: "/terms-of-serice",
  signInSuccessUrl: "/dashboard", // Redirect to the dashboard on successful sign-in

  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: "select_account",
      },
    },

    FacebookAuthProvider.PROVIDER_ID,
  ],
};
