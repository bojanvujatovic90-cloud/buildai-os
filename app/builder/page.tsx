"use client";
import { useState } from "react";

export default function Builder() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);

  async function generate() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });
    setResult(await res.json());
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Builder</h1>

      <textarea
        style={{ width: "100%", height: 120 }}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={generate}>Generate</button>

      {result && (
        <div>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
        </div>
      )}
    </div>
  );
}
