"use client";

import { useState } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
};

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
  phoneNumber: string;
  email: string;
  course: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    email: "",
    course: "",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const questions: string[] = [
    "What is your first name?",
    "What is your last name?",
    "What is your age?",
    "What is your phone number?",
    "What is your email address?",
    "How can I help you today? (Courses: Python, Snowflakes, Java, SQL, React)",
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const resetConversation = () => {
    setMessages([{ text: "Hi! How can I assist you today?", sender: "bot" }]);
    setUserData({
      firstName: "",
      lastName: "",
      age: "",
      phoneNumber: "",
      email: "",
      course: "",
    });
    setStep(0);
    setInput("");
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    let botReply = "";

    // Validation checks for email and phone number
    if (step === 3 && !validatePhoneNumber(input)) {
      botReply = "Please enter a valid 10-digit phone number.";
    } else if (step === 4 && !validateEmail(input)) {
      botReply = "Please enter a valid email address.";
    } else if (step < questions.length) {
      // Save user response based on the step
      const updatedData = { ...userData };
      if (step === 0) updatedData.firstName = input;
      if (step === 1) updatedData.lastName = input;
      if (step === 2) updatedData.age = input;
      if (step === 3) updatedData.phoneNumber = input;
      if (step === 4) updatedData.email = input;
      setUserData(updatedData);

      botReply = questions[step];
      setStep(step + 1);
    } else if (step === questions.length) {
      // Handle course selection or final message
      if (["Python", "Snowflakes", "Java", "SQL", "React"].includes(input)) {
        botReply = `${input} course selected. Training and placement will take 4 months.`;
        setUserData({ ...userData, course: input });
      } else {
        botReply =
          "For further queries, kindly fill out the contact or registration form. Our staff will contact you within 24 hours.";
      }
      // Show final message and then reset conversation
      setTimeout(() => resetConversation(), 3000); // Wait 3 seconds before resetting
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botReply, sender: "bot" },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
      >
        {isOpen ? "✖️" : "💬 Need help?"}
      </button>

      {isOpen && (
        <div className="w-80 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-100 text-gray-800">
            <h2 className="text-lg font-semibold">Chatbot</h2>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white text-right ml-auto"
                    : "bg-gray-200 text-gray-800 text-left mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-4 border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer..."
              className="flex-1 px-4 py-2 mr-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
