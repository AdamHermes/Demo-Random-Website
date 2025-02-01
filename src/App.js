import { useState } from "react";
import AnimationPlayer from "./components/Animation"; // Ensure this path is correct

function App() {
  console.log("App Loaded");
  const [selectedMode, setSelectedMode] = useState(null);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-200 text-center">
      <h1 className="text-4xl font-bold mb-6 text-red-600">
        Welcome to your AI Assistant
      </h1>

      <div className="flex space-x-4">
        <button
          className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setSelectedMode("fireworks")}
        >
          🎆 Fireworks Mode
        </button>
        <button
          className="bg-green-400 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setSelectedMode("hearts")}
        >
          💖 Hearts Mode
        </button>
        <button
          className="bg-purple-400 hover:bg-purple-600 text-white px-6 py-3 rounded-lg"
          onClick={() => setSelectedMode("stars")}
        >
          🌟 Stars Mode
        </button>
      </div>

      {/* Center the animation */}
      {selectedMode && (
        <div className="flex items-center justify-center mt-6">
          <AnimationPlayer mode={selectedMode} />
        </div>
      )}
    </div>
  );
}

export default App;
