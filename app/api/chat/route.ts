import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { messages } = await req.json()
        const lastMessage = messages[messages.length - 1]?.content || ""

        // Placeholder for AI logic (e.g., OpenAI, Anthropic, or custom RAG)
        // For now, return a helpful automated response to "prepare the place"

        let reply = "Я получил ваше сообщение и готов помочь! На данный момент я настраиваюсь для полноценной работы с базой знаний клиники."

        if (lastMessage.toLowerCase().includes("врач")) {
            reply = "У нас работают опытные психотерапевты, психиатры и наркологи. Вы можете посмотреть список специалистов в разделе 'Запись'."
        } else if (lastMessage.toLowerCase().includes("запис")) {
            reply = "Записаться на прием можно через кнопку 'Записаться на прием' в главном меню или позвонив по номеру 3000-103."
        }

        return NextResponse.json({ reply })
    } catch (error) {
        console.error("Chat API error:", error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
