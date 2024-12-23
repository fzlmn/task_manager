"use client";
import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo, FaArrowUp, FaArrowDown } from "react-icons/fa";

const TimerPage = () => {
const [time, setTime] = useState(0); // Time in seconds
const [isRunning, setIsRunning] = useState(false); // Timer running state
const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Store interval ID

// Start the timer
const startTimer = () => {
if (time > 0 && !isRunning) {
    const id = setInterval(() => {
    setTime((prevTime) => {
        if (prevTime <= 1) {
        clearInterval(id); // Stop the timer when it reaches 0
        setIsRunning(false);
        return 0;
        }
        return prevTime - 1; // Decrease time by 1 second
    });
    }, 1000);
    setIntervalId(id); // Save the interval ID
    setIsRunning(true);
}
};

// Stop the timer
const stopTimer = () => {
if (intervalId) {
    clearInterval(intervalId); // Stop the interval
    setIsRunning(false);
}
};

// Reset the timer
const resetTimer = () => {
if (intervalId) {
    clearInterval(intervalId); // Stop the interval
}
setTime(0); // Reset time to 0
setIsRunning(false); // Reset the running state
};

// Cleanup the interval on component unmount
useEffect(() => {
return () => {
    if (intervalId) {
    clearInterval(intervalId); // Clear interval if the component unmounts
    }
};
}, [intervalId]);

// Format the time in HH:MM:SS
const formatTime = (time: number) => {
const hours = Math.floor(time / 3600);
const minutes = Math.floor((time % 3600) / 60);
const seconds = time % 60;
return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

return (
<div className="timer-container m-6">
    <h1 className="text-3xl font-bold mb-4 text-center text-purple-600">Countdown Timer</h1>

    <div className="timer-display bg-purple-100 p-6 rounded-lg text-center mb-6">
    <div className="flex justify-center items-center gap-4 mb-4">
        <button
        onClick={() => setTime((prev) => Math.max(prev + 3600, 0))}
        className="text-purple-600"
        >
        <FaArrowUp className="w-6 h-6" />
        </button>
        <button
        onClick={() => setTime((prev) => Math.max(prev + 600, 0))}
        className="text-purple-600"
        >
        <FaArrowUp className="w-6 h-6" />
        </button>
    </div>
    <div className="text-5xl font-mono">{formatTime(time)}</div>
    <div className="flex justify-center items-center gap-4 mt-4">
        <button
        onClick={() => setTime((prev) => Math.max(prev - 3600, 0))}
        className="text-purple-600"
        >
        <FaArrowDown className="w-6 h-6" />
        </button>
        <button
        onClick={() => setTime((prev) => Math.max(prev - 600, 0))}
        className="text-purple-600"
        >
        <FaArrowDown className="w-6 h-6" />
        </button>
    </div>
    </div>

    <div className="timer-controls flex justify-center gap-4">
    <button
        className={`px-4 py-2 rounded text-white ${
        isRunning ? "bg-purple-700" : "bg-purple-500"
        }`}
        onClick={isRunning ? stopTimer : startTimer}
    >
        {isRunning ? <FaPause className="inline w-5 h-5" /> : <FaPlay className="inline w-5 h-5" />}{" "}
        {isRunning ? "Stop" : "Start"}
    </button>
    <button
        className="px-4 py-2 rounded bg-purple-600 text-white flex items-center gap-2"
        onClick={resetTimer}
        disabled={isRunning}
    >
        <FaRedo className="w-5 h-5" /> Reset
    </button>
    </div>
</div>
);
};

export default TimerPage;
