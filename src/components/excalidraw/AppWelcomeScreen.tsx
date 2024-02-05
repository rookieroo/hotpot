import React from "react";
import { WelcomeScreen } from "@excalidraw/excalidraw";
import { useTranslation } from 'react-i18next'

export const AppWelcomeScreen: React.FC = React.memo(() => {

  const { t } = useTranslation();

  const headingContent = t("welcomeScreen.app.center_heading");

  return (
    <WelcomeScreen>
      <WelcomeScreen.Hints.MenuHint>
        {t("welcomeScreen.app.menuHint")}
      </WelcomeScreen.Hints.MenuHint>
      <WelcomeScreen.Hints.ToolbarHint>
        {t("welcomeScreen.app.toolbarHint")}
      </WelcomeScreen.Hints.ToolbarHint>
      <WelcomeScreen.Hints.HelpHint>
      {t("welcomeScreen.app.HelpHint")}
      </WelcomeScreen.Hints.HelpHint>
      <WelcomeScreen.Center>
        <WelcomeScreen.Center.Logo />
        <WelcomeScreen.Center.Heading>
          {headingContent}
        </WelcomeScreen.Center.Heading>
        <WelcomeScreen.Center.Menu>
          <WelcomeScreen.Center.MenuItemLoadScene />
           {/*<WelcomeScreen.Center.MenuItemHelp />*/}
        </WelcomeScreen.Center.Menu>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  );
});
