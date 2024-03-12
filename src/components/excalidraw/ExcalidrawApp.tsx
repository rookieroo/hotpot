'use client'

import React, { useEffect, useRef, useState } from "react";
import { Excalidraw, MainMenu, useHandleLibrary } from "@excalidraw/excalidraw";
import {
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
} from "@excalidraw/excalidraw/types/types";
import { ResolvablePromise } from "@excalidraw/excalidraw/types/utils";
import {resolvablePromise} from "@/utils/utils";
import initialData from "@/components/excalidraw/simpleInitial";
import MobileFooter from "@/components/excalidraw/MobileFooter";
import {AppWelcomeScreen} from "@/components/excalidraw/AppWelcomeScreen";
import {useTheme} from "next-themes";
import {useTranslation} from "@/locales/client";

export default function ExcalidrawApp() {
  const { resolvedTheme } = useTheme();
  const { i18n } = useTranslation();

  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  const initialStatePromiseRef = useRef<{
    promise: ResolvablePromise<ExcalidrawInitialDataState | null>;
  }>({ promise: null! });

  if (!initialStatePromiseRef.current.promise) {
    initialStatePromiseRef.current.promise = resolvablePromise();
  }

  useHandleLibrary({ excalidrawAPI });

  useEffect(() => {
    if (!excalidrawAPI) {
      return;
    }
    initialStatePromiseRef.current.promise.resolve(initialData);
  }, [excalidrawAPI]);

  const renderMenu = () => {
    return (
      <MainMenu>
        <MainMenu.DefaultItems.LoadScene key="1" />
        <MainMenu.DefaultItems.SaveAsImage key="2" />
        <MainMenu.DefaultItems.Export key="3" />
        <MainMenu.DefaultItems.ClearCanvas key="4" />
        <MainMenu.Separator key="5" />
        <MainMenu.DefaultItems.ToggleTheme key="6" />
        <MainMenu.DefaultItems.Help key="7" />
        <MainMenu.Separator key="8" />
        <MainMenu.DefaultItems.ChangeCanvasBackground key="9" />
        {excalidrawAPI && <MobileFooter excalidrawAPI={excalidrawAPI} />}
      </MainMenu>
    );
  };

  return (
    <>
      <div className="h-screen">
        <Excalidraw
          initialData={initialStatePromiseRef.current.promise}
          excalidrawAPI={(api: ExcalidrawImperativeAPI) =>
            setExcalidrawAPI(api)
          }
          theme={resolvedTheme}
          langCode={i18n.language == 'zh' ? "zh-CN" : i18n.language}
        >
          <AppWelcomeScreen />
          {renderMenu()}
        </Excalidraw>
      </div>
    </>
  );
}
