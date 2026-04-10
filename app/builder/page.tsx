"use client";

import { useState } from "react";

export default function Builder() {
  const [prompt, setPrompt] = useState("");
  const [app, setApp] = useState<any>(null);

  async function generate() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    setApp(await res.json());
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>AI Builder</h1>

      <textarea
        placeholder="Describe your app..."
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", height: 120 }}
      />

      <button onClick={generate}>Generate</button>

      {app && (
        <div style={{ marginTop: 20 }}>
          <h2>{app.name}</h2>
          <p>{app.description}</p>

          {app.ui.map((el: any, i: number) => (
            <div key={i}>
              {el.type === "text" && <p>{el.value}</p>}
              {el.type === "button" && <button>{el.value}</button>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}