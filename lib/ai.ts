import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generateApp(prompt: string) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Return JSON: { name: string, description: string }" },
      { role: "user", content: prompt }
    ]
  });

  return JSON.parse(res.choices[0].message.content || "{}");
}
