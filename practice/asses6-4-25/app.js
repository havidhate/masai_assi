const { useState, useEffect } = React;

const FIREBASE_URL =
  "https://assessment6425-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json";

function FeedbackForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [message, setMessage] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, comment } = formData;

    if (!name || !email || !comment) {
      alert("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Enter a valid email!");
      return;
    }

    const newFeedback = {
      name,
      email,
      comment,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch(FIREBASE_URL, {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      onAdd({ ...newFeedback, id: data.name });
      setMessage("Feedback submitted!");
      setFormData({ name: "", email: "", comment: "" });
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="comment"
        placeholder="Your Feedback"
        value={formData.comment}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit Feedback</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </form>
  );
}

function FeedbackItem({ feedback, onDelete }) {
  return (
    <div className="feedback-item">
      <p>
        <strong>{feedback.name}</strong>
      </p>
      <p className="email">{feedback.email}</p>
      <p>{feedback.comment}</p>
      <button onClick={() => onDelete(feedback.id)}>Delete</button>
    </div>
  );
}

function FeedbackList({ feedbacks, onDelete }) {
  return (
    <div className="feedback-list">
      {feedbacks.map((fb) => (
        <FeedbackItem key={fb.id} feedback={fb} onDelete={onDelete} />
      ))}
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch(FIREBASE_URL);
      const data = await res.json();
      const fbList = data
        ? Object.entries(data).map(([id, val]) => ({ ...val, id }))
        : [];
      setFeedbacks(fbList);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  const handleAddFeedback = (fb) => {
    setFeedbacks((prev) => [fb, ...prev]);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://your-database.firebaseio.com/feedback/${id}.json`, {
        method: "DELETE",
      });
      setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
    } catch (err) {
      console.error("Error deleting feedback:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="container">
      <ThemeToggle />
      <FeedbackForm onAdd={handleAddFeedback} />
      <FeedbackList feedbacks={feedbacks} onDelete={handleDelete} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
