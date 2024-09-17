import { useEffect } from "react";
import * as firebaseui from "firebaseui";
import { auth } from "@/lib/firebase";
import { uiConfig } from "@/lib/uiConfig";
import "firebaseui/dist/firebaseui.css";

const Auth = () => {
  useEffect(() => {
    let ui: firebaseui.auth.AuthUI;

    if (!firebaseui.auth.AuthUI.getInstance()) {
      ui = new firebaseui.auth.AuthUI(auth);
      ui.start("#firebaseui-auth-container", uiConfig);
    }

    return () => {
      ui.reset();
    };
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};

export default Auth;
