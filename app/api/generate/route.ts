import { generateApp } from "@/lib/ai";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const app = await generateApp(prompt);
  return Response.json(app);
}