import { fr } from "@codegouvfr/react-dsfr";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { InformationIcon } from "assets/Information";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";

type Props = {
  faqData: { title: string; body: string }[];
};

export const OfflineSupport = ({ faqData }: Props) => {
  const { t } = useTranslation("Support");

  return (
    <section id="content">
      <Breadcrumb
        className="fr-mb-0"
        currentPageLabel={t("contact support")}
        homeLinkProps={{
          to: "/",
        }}
        segments={[]}
      />

      <div
        className={fr.cx("fr-grid-row", "fr-grid-row--middle", "fr-mt-md-0", "fr-mt-2w")}
        style={{ "flexWrap": "nowrap" }}
      >
        <InformationIcon />
        <h1>{t("support title")}</h1>
      </div>
      <section aria-label={t("FAQ section")}>
        <h3>{t("FAQ")}</h3>
        <div className={fr.cx("fr-accordions-group")}>
          {faqData.map(data => (
            <Accordion key={data.title} label={data.title}>
              {data.body}
            </Accordion>
          ))}
        </div>
      </section>
      <section aria-label={t("FAQ form section")} className="fr-my-6w">
        <h3>
          {t("FAQ form title")} <br aria-hidden="true" /> {t("contact us")}
        </h3>
      </section>
    </section>
  );
};

const { i18n } = declareComponentKeys<
  | "contact support"
  | "support title"
  | "FAQ"
  | "FAQ section"
  | "FAQ form section"
  | "FAQ form title"
  | "contact us"
>()("Support");

export type I18n = typeof i18n;
