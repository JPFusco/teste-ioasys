import './style.css';

function FeedbackLogin({ message }: { message: string }) {
  return (
    <div className="feedback-login-container">
      <p>{message}</p>
    </div>
  );
}

export default FeedbackLogin;
