import profileImg from "../../assets/celim-profile.jpg";
import closeIcon from "../../assets/icons/close.svg";

export default function AiAgentPage() {
  return (
    <>
      <div
        style={{
          width: "330px",
          height: "570px",
          borderRadius: "16px",
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
            <img style={{ width: "24px", height: "24px" }} src={closeIcon} alt="close" />
          </div>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
