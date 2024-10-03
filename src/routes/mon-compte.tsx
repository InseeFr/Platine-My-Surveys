import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MyAccount } from "components/myAccount/MyAccount";
import { protectedLoader, useUser } from "hooks/useAuth";
import { useFetchQueryPilotage } from "hooks/useFetchQuery";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/mon-compte")({
  component: MyAccountIndex,
  beforeLoad: protectedLoader,
});

function MyAccountIndex() {
  const { t } = useTranslation("Header");
  const user = useUser();

  const {
    data: contact,
    isLoading,
    refetch,
  } = useFetchQueryPilotage("/api/contacts/{id}", {
    urlParams: {
      id: user.preferred_username.toUpperCase(),
    },
  });

  if (!contact || isLoading) {
    return;
  }

  return (
    <div className={fr.cx("fr-container")}>
      <title>{`${t("my account")} - ${t("service tagline")}`}</title>
      <MyAccount contact={contact} onSave={refetch} />
    </div>
  );
}
