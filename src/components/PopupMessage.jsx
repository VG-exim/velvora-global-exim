import "./PopupMessage.css";

function PopupMessage({
  show,
  type,
  title,
  message,
  onClose,
}) {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className={`popup-box ${type}`}>

        <div className="popup-icon">
          {type === "success" ? "✅" : "⚠️"}
        </div>

        <h2>{title}</h2>

        <p>{message}</p>

        <button onClick={onClose}>
          OK
        </button>

      </div>
    </div>
  );
}

export default PopupMessage;