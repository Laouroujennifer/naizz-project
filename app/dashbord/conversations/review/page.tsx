"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Review() {
  const [tab, setTab] = useState<"summary" | "transcript" | "saved">("summary");
  const [lang, setLang] = useState<"english" | "french">("english");

  return (
    <DashboardLayout>
      <div className="mt-8 sm:mt-8">
      
      <h1 className="text-xl font-semibold">Hello Mide,</h1>
      <p className="text-sm text-gray-500 mb-6">Conversations &lt; Review</p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Conversation with Coach Dorothy</h2>
      </div>

      {/* Player */}
      <div className="bg-white p-4 rounded-md shadow mb-6">
        <div className="mb-3">
          <audio controls src="/audio/sample.mp3" className="w-full" />
        </div>
        <div className="text-xs text-gray-500 text-right">0:10 / 1:00:40</div>
      </div>

      {/* Tabs */}
      <div>
        <div className="border-b border-gray-300 mb-4">
          <nav className="-mb-px flex space-x-6">
            <button
              onClick={() => setTab("summary")}
              className={`pb-3 ${
                tab === "summary"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Summary
            </button>
            <button
              onClick={() => setTab("transcript")}
              className={`pb-3 ${
                tab === "transcript"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Transcript
            </button>
            <button
              onClick={() => setTab("saved")}
              className={`pb-3 ${
                tab === "saved"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Saved words
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white p-4 rounded-md shadow min-h-[220px]">
          {tab === "summary" && (
            <div className="text-sm text-gray-700">
              Summary of conversation prompt goes here. Summary of conversation
              prompt goes here. Summary of conversation prompt goes here.
              Summary of conversation prompt goes here. Summary of conversation
              prompt goes here. Summar y of conversation prompt goes here. Summary of conversation
              prompt goes here. Summary of conversation prompt goes here.
              Summary of conversation prompt goes here. Summary of conversation
              prompt goes here. Summary of conversation prompt goes here. Summary of conversation
              prompt goes here. Summary of conversation prompt goes here.
              Summary of conversation prompt goes here. Summary of conversation
              prompt goes here. Summary of conversation prompt goes here. Summary of conversation
              prompt goes here. Summary of conversation prompt goes here.
              Summary of conversation prompt goes here. Summary of conversation
              prompt goes here.
            </div>
          )}

          {tab === "transcript" && (
            <div className="text-sm text-gray-700">
              {/* Sub-tabs for languages */}
              <div className="flex space-x-4 mb-4 border-b-2 pb-2">
                <button
                  onClick={() => setLang("english")}
                  className={`text-sm ${
                    lang === "english"
                      ? "text-blue-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang("french")}
                  className={`text-sm ${
                    lang === "french"
                      ? "text-blue-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  French
                </button>
              </div>

              {lang === "english" && (
                <p>
                  Transcription of conversation goes here. Transcription of
                  conversation goes here. Transcription of conversation goes
                  here. Transcription of conversation goes here.
                    Transcription of conversation goes here. Transcription of
                  conversation goes here. Transcription of conversation goes
                  here. Transcription of conversation goes here.
                      Transcription of conversation goes here. Transcription of
                  conversation goes here. Transcription of conversation goes
                  here. Transcription of conversation goes here.Transcription of conversation goes here. Transcription of
                  conversation goes here. Transcription of conversation goes
                  here. Transcription of conversation goes here.
                </p>
              )}
              {lang === "french" && (
                <p>
                  Transcription en français ici. Transcription en français ici.
                  Transcription en français ici.Transcription en français ici. Transcription en français ici.
                  Transcription en français ici.Transcription en français ici. Transcription en français ici.
                  Transcription en français ici.Transcription en français ici. Transcription en français ici.
                  Transcription en français ici.
                </p>
              )}
            </div>
          )}

          {tab === "saved" && (
            <div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs text-gray-500 border-b border-gray-400">
                    <th className="py-2 w-12">S/N</th>
                    <th className="py-2">Word</th>
                    <th className="py-2">Definition</th>
                    <th className="py-2">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((n) => (
                    <tr key={n} className="border-t border-gray-400">
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
       </div>
    </DashboardLayout>
  );
}
