import { useState } from "react"
import html2canvas from "html2canvas";
import {format} from "date-fns";
import {useTranslation} from "@/locales/client";
import {usePathname} from "next/navigation";

export default function useHtmlCanvas() {
  const [url, setUrl] = useState("")
  const [error, setError] = useState(null)
  const pathname = usePathname()
  const { t } = useTranslation();

  const option = {
    useCORS: true,
  }
  const download = async (id: string, fileName?: string, op={}) => {
    try {
      const ele = document.getElementById(id);
      const canvas = await html2canvas(ele as HTMLDivElement, {
        ...option,
        ...op
      });
      const imgUrl = canvas.toDataURL("image/png");
      setUrl(imgUrl)
      const tempLink = document.createElement("a");
      tempLink.style.display = "none";
      tempLink.href = imgUrl;
      const now = format(Number(new Date().getTime()), "LLL dd, y")
      const fn = fileName || `${now}${pathname}_.png`
      tempLink.setAttribute("download", fn);
      if (typeof tempLink.download === "undefined")
        tempLink.setAttribute("target", "_blank");

      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      window?.URL?.revokeObjectURL(imgUrl);
      Promise.resolve();
    } catch (error: any) {
      setError(error)
    } finally {}
  };

  return [url, download, error]
}
