"use client";
import React, { useState, useRef } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Review() {
  const [tab, setTab] = useState<"summary"|"transcript"|"saved">("summary");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Conversations &lt; Review</p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Conversation with Coach Dorothy</h2>
      </div>

      <div className="bg-white p-4 rounded-md shadow mb-6">
        {/* Simple waveform placeholder + controls */}
        <div className="mb-3">
          <audio ref={audioRef} controls src="/audio/sample.mp3" className="w-full" />
        </div>
        <div className="text-xs text-gray-500 text-right">0:10 / 1:00:40</div>
      </div>

      <div>
        <div className="border-b mb-4">
          <nav className="-mb-px flex space-x-6">
            <button onClick={() => setTab("summary")} className={`pb-3 ${tab==="summary" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}>Summary</button>
            <button onClick={() => setTab("transcript")} className={`pb-3 ${tab==="transcript" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}>Transcript</button>
            <button onClick={() => setTab("saved")} className={`pb-3 ${tab==="saved" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}>Saved words</button>
          </nav>
        </div>

        <div className="bg-white p-4 rounded-md shadow min-h-[180px]">
          {tab === "summary" && (
            <div className="text-sm text-gray-700">
              Summary of conversation prompt goes here. Summary of conversation prompt goes here. Summary of conversation prompt goes here.
            </div>
          )}
          {tab === "transcript" && (
            <div className="text-sm text-gray-700">
              <div className="mb-2 font-semibold">English</div>
              <p>Transcription of conversation goes here. Transcription of conversation goes here. Transcription of conversation goes here.</p>
            </div>
          )}
          {tab === "saved" && (
            <div>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs text-gray-500">
                    <th className="py-2 w-12">S/N</th>
                    <th className="py-2">Word</th>
                    <th className="py-2">Definition</th>
                    <th className="py-2">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4].map((n) => (
                    <tr key={n} className="border-t">
                      <td className="py-3">{n}.</td>
                      <td className="py-3">Belle - Adj (feminine)</td>
                      <td className="py-3">To be beautiful</td>
                      <td className="py-3">Je suis belle</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
