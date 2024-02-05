'use client'

import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
import React, { useState, useEffect } from 'react'
import {useTranslation} from "@/locales/client";
import GraphemeSplitter from 'grapheme-splitter'
import {Avatar, IconButton, Tooltip} from "@mui/material";
import {pink} from "@mui/material/colors";
import {addStatsForCompletedGame, loadStats} from "@/components/mahjong/lib/stats";
import {
  ABOUT_GAME_MESSAGE,
  CORRECT_WORD_MESSAGE,
  GAME_COPIED_MESSAGE,
  GAME_TITLE,
  INVALID_HAND_MESSAGE,
  KEYBOARD_SHORTCUT_REMINDER_MESSAGE,
  NOT_ENOUGH_LETTERS_MESSAGE,
  WIN_MESSAGES,
  WORD_NOT_FOUND_MESSAGE
} from "@/components/mahjong/constants/strings";
import {StatsModal} from "@/components/mahjong/modals/StatsModal";
import {GUESS_MAX, HAND_SIZE} from "@/components/mahjong/constants/settings";
import {isInvalidHand, isTsumo, isWinningWord, isWordInWordList, solution, wind} from "@/components/mahjong/lib/words";
import {AboutModal} from "@/components/mahjong/modals/AboutModal";
import {InfoModal} from "@/components/mahjong/modals/InfoModal";
import {loadGameStateFromLocalStorage, saveGameStateToLocalStorage} from "@/components/mahjong/lib/localStorage";
import {HPAlert} from "@/components/customize-ui/hp-alert";
import {Grid} from "@/components/mahjong/grid/Grid";
import {Keyboard} from "@/components/mahjong/keyboard/Keyboard";

const ALERT_TIME_MS = 2000
const graphemeSplitter = new GraphemeSplitter()

const windMap: { [id: number]: string } = {
  1: '東',
  2: '南',
  3: '西',
  4: '北',
}

export default function MahjongApp() {
  const { t } = useTranslation();
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false)
  const [isInvalidHandAlertOpen, setIsInvalidHandAlertOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)

  const [successAlert, setSuccessAlert] = useState('')
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage()
    if (loaded?.solution !== solution) {
      return []
    }
    const gameWasWon = loaded.guesses.includes(solution)
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === GUESS_MAX && !gameWasWon) {
      setIsGameLost(true)
    }
    return loaded.guesses
  })

  const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution })
  }, [guesses])

  useEffect(() => {
    if (isGameWon) {
      setSuccessAlert(
        WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]
      )
      setTimeout(() => {
        setSuccessAlert('')
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
  }, [isGameWon, isGameLost])

  const onChar = (value: string) => {
    if (value === 'm' || value === 'p' || value === 's' || value === 'z') {
      let lookupTable = {
        m: ['🀇', '🀈', '🀉', '🀊', '🀋', '🀌', '🀍', '🀎', '🀏'],
        p: ['🀙', '🀚', '🀛', '🀜', '🀝', '🀞', '🀟', '🀠', '🀡'],
        s: ['🀐', '🀑', '🀒', '🀓', '🀔', '🀕', '🀖', '🀗', '🀘'],
        z: ['🀀', '🀁', '🀂', '🀃', '🀆', '🀅', '🀄', '', ''],
      }
      setCurrentGuess(
        currentGuess.replace(
          /[1-9]/g,
          (match) => lookupTable[value][parseInt(match) - 1]
        )
      )
    } else if (guesses.length < GUESS_MAX && !isGameWon) {
      let trimmedGuess = currentGuess.replaceAll(/[1-9]/g, '')

      if (
        '1' <= value &&
        value <= '9' &&
        graphemeSplitter.splitGraphemes(currentGuess).length < HAND_SIZE
      ) {
        setCurrentGuess(`${currentGuess}${value}`)
      } else if (
        value > '9' &&
        graphemeSplitter.splitGraphemes(trimmedGuess).length < HAND_SIZE
      ) {
        setCurrentGuess(`${trimmedGuess}${value}`)
      }
    }
  }

  const onDelete = () => {
    setCurrentGuess(
      graphemeSplitter.splitGraphemes(currentGuess).slice(0, -1).join('')
    )
  }

  const onClear = () => {
    setCurrentGuess(
      ''
    )
  }

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return
    }
    if (
      !(
        graphemeSplitter.splitGraphemes(currentGuess.replace(/[1-9]/g, ''))
          .length === HAND_SIZE
      )
    ) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, ALERT_TIME_MS)
    }

    if (!isInvalidHand(currentGuess)) {
      setIsInvalidHandAlertOpen(true)
      return setTimeout(() => {
        setIsInvalidHandAlertOpen(false)
      }, ALERT_TIME_MS)
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true)
      return setTimeout(() => {
        setIsWordNotFoundAlertOpen(false)
      }, ALERT_TIME_MS)
    }

    const winningWord = isWinningWord(currentGuess)

    if (
      graphemeSplitter.splitGraphemes(currentGuess).length === HAND_SIZE &&
      guesses.length < GUESS_MAX &&
      !isGameWon
    ) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        setStats(addStatsForCompletedGame(stats, guesses.length))
        return setIsGameWon(true)
      }

      if (guesses.length === GUESS_MAX - 1) {
        setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        setIsGameLost(true)
      }
    }
  }

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex w-80 mx-auto items-center mb-8 mt-12">
        <h1 className="text-xl grow font-bold dark:text-white">{GAME_TITLE}</h1>
        <Tooltip title={t("Open Mahjong Info")}>
          <IconButton onClick={() => setIsInfoModalOpen(true)} sx={{ p: 0 }}>
            <Avatar
              sx={{ bgcolor: pink[500], width: 32, height: 32 }}
            >
              <InfoIcon sx={{ fontSize: 20 }} />
            </Avatar>
          </IconButton>
        </Tooltip>
        <Tooltip title={t("Open Mahjong Stats")}>
          <IconButton onClick={() => setIsStatsModalOpen(true)} sx={{ p: 0 }}>
            <Avatar
              sx={{ bgcolor: pink[500], width: 32, height: 32 }}
            >
              <BarChartIcon sx={{ fontSize: 20 }} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </div>
      <div className="flex w-full mx-auto items-center mb-8 mt-12">
        <h2 className="text-lg w-full text-center font-bold dark:text-white">
          Round wind: {windMap[Math.floor(wind / 10)]} / Seat wind:{' '}
          {windMap[wind % 10]} / {isTsumo ? 'Tsumo' : 'Ron'}
        </h2>
      </div>
      <Grid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        onClear={onClear}
        guesses={guesses}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        guesses={guesses}
        gameStats={stats}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        handleShare={() => {
          setSuccessAlert(GAME_COPIED_MESSAGE)
          return setTimeout(() => setSuccessAlert(''), ALERT_TIME_MS)
        }}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
      />

      <button
        type="button"
        className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
        onClick={() => setIsAboutModalOpen(true)}
      >
        {ABOUT_GAME_MESSAGE}
      </button>

      <HPAlert
        msg={`${
          NOT_ENOUGH_LETTERS_MESSAGE +
          (currentGuess.match(/[1-9]/g)
            ? KEYBOARD_SHORTCUT_REMINDER_MESSAGE
            : '')
        }`}
        open={isNotEnoughLetters}
      />
      <HPAlert
        msg={WORD_NOT_FOUND_MESSAGE}
        open={isWordNotFoundAlertOpen}
      />
      <HPAlert msg={INVALID_HAND_MESSAGE} open={isInvalidHandAlertOpen} />
      <HPAlert msg={CORRECT_WORD_MESSAGE(solution)} open={isGameLost} />
      <HPAlert
        msg={successAlert}
        open={successAlert !== ''}
        severity="success"
      />
    </div>
  )
}
