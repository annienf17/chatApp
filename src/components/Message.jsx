const Message = ({ sender, content }) => {
  return (
    <div className="message">
      <strong>{sender}:</strong> {content}
    </div>
  );
};

export default Message;
