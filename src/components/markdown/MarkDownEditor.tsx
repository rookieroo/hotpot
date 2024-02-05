'use client'

import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useEffect, useState } from "react";
import {useTranslation} from "@/locales/client";
import { toolbars, codeThemeOptions, previewThemeOptions } from "./config";
import { TLanguage } from "@/locales";
import { Emoji, ExportPDF, Mark } from "@vavt/rt-extension";
import { FormControl, Box, NativeSelect } from "@mui/material";

import "@vavt/rt-extension/lib/asset/style.css";
import {useTheme} from "next-themes";
import {TimeNow} from "@/components/customize-ui/time-now";

interface IMdEditorState {
  lang?: TLanguage;
  text?: string;
  theme?: "light" | "dark";
  previewTheme?:
    | "default"
    | "github"
    | "vuepress"
    | "mk-cute"
    | "smart-blue"
    | "cyanosis"
    | "arknights";
  codeTheme?:
    | "atom"
    | "a11y"
    | "github"
    | "gradient"
    | "kimbie"
    | "paraiso"
    | "qtcreator"
    | "stackoverflow";
}

export default function MdEditorEx() {
  const { resolvedTheme: theme } = useTheme();
  const { t, i18n } = useTranslation();
  const initState = {
    lang: i18n.language as TLanguage,
    text: "",
    theme: theme,
    codeTheme: "atom",
    previewTheme: "default",
  };

  const [state, setState] = useState(initState);

  useEffect(() => {
    setState({
      ...state,
      text: t("mdText", { ns: "markdown" }),
    });
  }, [i18n.language]);

  const PreviewTheme = () => {
    return (
      <>
        <Box
          title={t("Open Preview Theme", { ns: "markdown" })}
          sx={{ maxWidth: 120 }}
        >
          <FormControl fullWidth>
            <NativeSelect
              value={state.previewTheme}
              onChange={(event) => {
                setState({
                  ...state,
                  previewTheme: event.target
                    .value as IMdEditorState["previewTheme"],
                });
              }}
            >
              {previewThemeOptions.map((preview) => (
                <option key={preview.value} value={preview.value}>
                  {preview.label}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>
      </>
    );
  };

  const CodeTheme = () => {
    return (
      <>
        <Box title={t("Open Code Theme", { ns: "markdown" })} sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <NativeSelect
              value={state.codeTheme}
              onChange={(event) => {
                setState({
                  ...state,
                  codeTheme: event.target.value as IMdEditorState["codeTheme"],
                });
              }}
            >
              {codeThemeOptions.map((code) => (
                <option key={code.value} value={code.value}>
                  {code.label}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>
      </>
    );
  };

  return (
    <div className="h-screen relative z-1">
      <MdEditor
        modelValue={state.text!}
        theme={theme}
        onChange={(modelValue) => setState({ ...state, text: modelValue })}
        language={i18n.language === "en" ? "en-US" : i18n.language}
        previewTheme={state.previewTheme}
        codeTheme={state.codeTheme}
        toolbars={toolbars}
        defToolbars={[
          <Emoji key={1} />,
          <Mark key={2} />,
          <ExportPDF key={3} modelValue={state.text!} height="100vh" />,
          <CodeTheme key={4} />,
          <PreviewTheme key={5} />,
        ]}
        defFooters={[<TimeNow key={1} />]}
        autoDetectCode={true}
        footers={["markdownTotal", "=", 0, "scrollSwitch"]}
      />
    </div>
  );
}
