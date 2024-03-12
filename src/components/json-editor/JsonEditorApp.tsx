'use client'

import JSONEditor, { JSONEditorMode } from "jsoneditor";
import { useEffect, useRef } from "react";
import "jsoneditor/dist/jsoneditor.min.css";
import {useTheme} from "next-themes";
import {useTranslation} from "@/locales/client";

const LEFT_JSON = {
  marks: [50, 49],
  student_details: {
    name: "chris",
    address: {
      street: "foo",
      city: "bar",
      zip: "**",
    },
    age: 19,
  },
};

type JSONEditorType = typeof JSONEditor.prototype;

export default function JsonEditorApp() {
  const initJEditor: JSONEditorType = null as unknown as JSONEditorType;

  const { resolvedTheme } = useTheme();
  const { i18n } = useTranslation();
  const left = useRef(initJEditor);
  const right = useRef(initJEditor);

  useEffect(() => {
    const prepare = async () => {
      const options = {
        language: i18n && i18n.language,
        mode: "code" as JSONEditorMode,
        // theme: theme,
        modes: [
          "code",
          "view",
          "form",
          "text",
          "tree",
          "preview",
        ] as JSONEditorMode[],
        onChangeText: (json: string) => {
          if (right) right.current?.updateText(json);
        },
      };
      left.current = new JSONEditor(
        document.getElementById("jsoneditor-left")!,
        options,
        LEFT_JSON
      );

      right.current = new JSONEditor(
        document.getElementById("jsoneditor-right")!,
        {
          language: i18n && i18n.language,
          // theme: theme,
          mode: "tree",
          modes: ["code", "view", "form", "text", "tree", "preview"],
        },
        LEFT_JSON
      );
    };

    prepare();

    return () => {
      left.current?.destroy();
      right.current?.destroy();
    };
  }, [i18n, i18n.language, resolvedTheme]);

  return (
    <div className="h-screen relative z-1">
      <div className="h-screen flex flex-row flex-nowrap justify-center z-1">
        <div id="jsoneditor-left" className="w-1/2" />
        <div id="jsoneditor-right" className="w-1/2" />
      </div>
    </div>
  );
}
