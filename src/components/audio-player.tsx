"use client";
import { memo, useEffect, useState } from "react";
import { NextPage } from "next";

interface AudioPlayerProps {
  startAlarm: (audio: HTMLAudioElement) => void;
  isOn: boolean;
  link: string;
}

const AudioPlayer: NextPage<AudioPlayerProps> = ({
  startAlarm,
  isOn,
  link,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  useEffect(() => {
    setAudio(new Audio("https://kukuklok.com/audio/alien.mp3"));
  }, []);
  return (
    <>
      <button
        onClick={() => {
          if (audio) {
            startAlarm(audio);
          }
        }}
        className={`${isOn ? "btn-error" : "btn-success"} btn join-item w-full`}
      >
        {isOn ? "Stop" : "Start"}
      </button>
    </>
  );
};

export default AudioPlayer;
