import { useCallback } from "react";
import profileImg from "../../assets/celim-profile.jpg";
import closeIcon from "../../assets/icons/close.svg";
import { useAiAgent } from "../../hooks/useAiAgent";

export default function AiAgentPage() {
  const { messages, sendMessage } = useAiAgent();

  const handleUserMessage = useCallback((message: string) => {
    // Handle user message and invalidate input
    sendMessage(message);
  }, [sendMessage]);

  return (
    <>
      <div
        style={{
          width: "330px",
          height: "570px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="flex flex-col h-screen bg-[var(--main-bg-color)]"
      >
        <header
          style={{
            padding: "12px 16px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div className="flex items-center gap-2 absolute top-2 left-2">
            <picture>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "500%",
                }}
                src={profileImg}
                alt="profile"
              />
            </picture>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>Celim</span>
          </div>
          <div className="absolute top-2 right-2">
            <button
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                style={{ width: "24px", height: "24px" }}
                src={closeIcon}
                alt="close"
              />
            </button>
          </div>
        </header>
        <main>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer style={{
          padding: "12px 16px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          position: "relative",
          bottom: 0,
        }}>
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="w-full p-2 border rounded-lg"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUserMessage(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
          />
        </footer>
      </div>
    </>
  );
}
