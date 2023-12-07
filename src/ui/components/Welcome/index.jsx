import { menuDictionary } from "i18n";

export const Welcome = () => {
  return (
    <p className="welcomeMessage">
      {
        menuDictionary.welcomeMessage
      }
    </p>
  );
};
