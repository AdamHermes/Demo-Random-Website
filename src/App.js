// src/App.js
import { useState } from "react";
import AnimationPlayer from "./components/Animation";

function App() {
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedImage, setSelectedImage] = useState("img1");
  const [isBusy, setIsBusy] = useState(false);

  const handleSelectMode = (mode) => {
    if (isBusy || selectedMode === mode) return;
    setIsBusy(true);
    setSelectedMode(mode);
    setTimeout(() => setIsBusy(false), 1000);
  };

  const handleSelectImage = (imgKey) => {
    if (isBusy) return;
    setSelectedImage(imgKey);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 bg-pink-200 text-center">
      <h1 className="text-4xl font-bold mb-6 text-red-600">
        Happy Birthday Lê Quốc Thiện
      </h1>

      {/* Image selection buttons */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Array.from({ length: 9 }, (_, i) => `img${i + 1}`).map((img) => (
          <button
            key={img}
            disabled={isBusy}
            onClick={() => handleSelectImage(img)}
            className={`bg-yellow-400 text-white px-4 py-2 rounded-lg
              ${isBusy ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"}
              ${selectedImage === img ? "ring-4 ring-yellow-200" : ""}`}
          >
            {img.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Mode selection buttons */}
      <div className="flex space-x-4 mb-6">
        
        <button
          disabled={isBusy}
          onClick={() => handleSelectMode("hearts")}
          className={`bg-green-400 text-white px-6 py-3 rounded-lg
            ${isBusy ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"}`}
        >
          💖 Hearts Mode
        </button>
        <button
          disabled={isBusy}
          onClick={() => handleSelectMode("stars")}
          className={`bg-purple-400 text-white px-6 py-3 rounded-lg
            ${isBusy ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"}`}
        >
          🌟 Stars Mode
        </button>
        <button
          disabled={isBusy}
          onClick={() => handleSelectMode("fireworks")}
          className={`bg-blue-400 text-white px-6 py-3 rounded-lg
            ${isBusy ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
        >
          🎆 Fireworks Mode
        </button>
      </div>

      {/* Animation Player */}
      {selectedMode && (
        <div className="flex flex-col items-center">
          <AnimationPlayer
            key={`${selectedMode}-${selectedImage}`}
            mode={selectedMode}
            imageKey={selectedImage}
          />
        </div>
      )}
    </div>
  );
}

export default App;
