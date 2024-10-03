import { useOidc } from "hooks/useAuth";
import { declareComponentKeys, useTranslation } from "i18n";
import { useState, useEffect } from "react";
import { useStyles } from "tss";

export function AutoLogoutCountdown() {
  const { isUserLoggedIn, subscribeToAutoLogoutCountdown } = useOidc();
  const [secondsLeft, setSecondsLeft] = useState<number | undefined>(undefined);
  const { t } = useTranslation("AutoLogout");

  useEffect(
    () => {
      if (!isUserLoggedIn) {
        return;
      }

      const { unsubscribeFromAutoLogoutCountdown } = subscribeToAutoLogoutCountdown(({ secondsLeft }) =>
        setSecondsLeft(secondsLeft === undefined || secondsLeft > 60 ? undefined : secondsLeft),
      );

      return () => {
        unsubscribeFromAutoLogoutCountdown();
      };
    },
    // NOTE: These dependency array could very well be empty
    // we're just making react-hooks/exhaustive-deps happy.
    // Unless you're hot swapping the oidc context isUserLoggedIn
    // and subscribeToAutoLogoutCountdown never change for the
    // lifetime of the app.
    [isUserLoggedIn, subscribeToAutoLogoutCountdown],
  );

  const { css } = useStyles();

  if (secondsLeft === undefined) {
    return null;
  }

  return (
    <div
      // Full screen overlay, blurred background
      className={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      })}
    >
      <div className={css({ textAlign: "center" })}>
        <p>{t("autoLogoutLabel")}</p>
        {t("logoutTimer", { secondLeft: secondsLeft })}
      </div>
    </div>
  );
}

const { i18n } = declareComponentKeys<
  | "autoLogoutLabel"
  | {
      K: "logoutTimer";
      P: {
        secondLeft: number;
      };
      R: JSX.Element;
    }
>()("AutoLogout");

export type I18n = typeof i18n;
