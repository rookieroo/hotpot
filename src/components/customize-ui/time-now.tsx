import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import {daysToWeeks, format, getWeek} from "date-fns";

const weekNames = {
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  'zh': ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
}

export function TimeNow() {
  const { i18n } = useTranslation();

  const [text, setText] = useState('')

  const getTimeNowText = () => {
    const lang = i18n.language as 'en' | 'zh'
    const now = new Date()
    const weekday = getWeek(now)
    const time = format(now, 'yyyy/MM/dd HH:mm:ss')
    return `${time} ${weekNames[lang][weekday > 0 ? weekday - 1 : 6]}`
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setText(getTimeNowText())
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      { text }
    </>
  )
}
