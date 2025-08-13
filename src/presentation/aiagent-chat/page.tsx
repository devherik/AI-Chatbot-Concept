import { useCallback, useState } from "react";
import profileImg from "../../assets/celim-profile.jpg";
import closeIcon from "../../assets/icons/close.svg";
import sendIcon from "../../assets/icons/ai-send.svg";
import { useAiAgent } from "../../hooks/useAiAgent";

export default function AiAgentPage() {
  const { messages, sendMessage } = useAiAgent();
  const [userInput, setUserInput] = useState("");

  const handleUserMessage = useCallback(async () => {
    // Handle user message and invalidate input
    sendMessage(userInput);
    setUserInput("");
  }, [sendMessage, userInput]);

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
        className="flex flex-col h-screen bg-[var(--primary-color)]"
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
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "var(--main-font)",
              }}
            >
              Celim
            </span>
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
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
          }}
        >
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
                <div className="max-w-[70%] flex flex-col gap-1">
                  {message.sender === "user" ? (
                    <span style={{ textAlign: "right", fontSize: "12px" }}>Você</span>
                  ) : (
                    <span style={{ textAlign: "left", fontSize: "12px" }}>Celim</span>
                  )}
                  <div
                    className={`p-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-[var(--green-color)] text-[var(--inverted-color)]"
                        : "bg-[var(--grey-color)] text-[var(--text-color)]"
                    }`}
                    style={{
                      fontFamily: "var(--secondary-font)",
                      textAlign: message.sender === "user" ? "right" : "left",
                      fontSize: "14px",
                    }}
                  >
                    <span>{message.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer
          style={{
            padding: "12px 16px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            position: "relative",
            bottom: 0,
          }}
        >
          <div className="flex items-center gap-2 w-full">
            <textarea
              style={{
                flex: 1,
                padding: "8px 16px",
                border: "1px solid var(--border-color)",
                borderRadius: "16px",
                outline: "none",
                backgroundColor: "var(--primary-color)",
                color: "var(--text-color)",
                fontFamily: "var(--secondary-font)",
                height: "100%",
                boxSizing: "border-box",
                resize: "none",
              }}
              rows={1}
              cols={20}
              placeholder="Me faça uma pergunta"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUserMessage();
                  e.currentTarget.value = "";
                }
              }}
            />
            <button
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                width: "32px",
              }}
              onClick={handleUserMessage}
            >
              <img
                style={{ width: "32px", height: "32px" }}
                src={sendIcon}
                alt="Send"
              />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
