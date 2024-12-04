import { useGlobalContext } from "../context";
import Home from "../component/Home";
import FormScore from "../component/FormScore";
const Form = ({ setCurrentPage }) => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-10 w-full max-w-3xl shadow-lg rounded-lg space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Answer These Questions for Dyslexia Screening
        </h2>

        {/* Rearrange Letters */}
        <div>
          <label htmlFor="rearrange" className="block text-gray-700 font-medium">
            Rearrange the letters to form a correct word: "rctcore"
          </label>
          <input
            type="text"
            id="rearrange"
            name="rearrange"
            className="mt-1 block w-full p-3 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            value={quiz.rearrange}
            onChange={handleChange}
          />
        </div>

        {/* Identify Word from Noise */}
        <div>
          <label htmlFor="word" className="block text-gray-700 font-medium">
            Identify the correct word from the list: "car", "far", "tar", "bar"
          </label>
          <input
            type="text"
            id="word"
            name="word"
            className="mt-1 block w-full p-3 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            value={quiz.word}
            onChange={handleChange}
          />
        </div>

        {/* Replace Underlined Word */}
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium">
            Replace the underlined word in the sentence: "I was feeling very *hungry*."
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full p-3 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="Tired">Tired</option>
            <option value="Hungry">Hungry</option>
            <option value="Happy">Happy</option>
            <option value="Angry">Angry</option>
          </select>
        </div>

        {/* Alphabetical Order */}
        <div>
          <label htmlFor="alphabetical" className="block text-gray-700 font-medium">
            Arrange these words alphabetically: "apple, dog, cat, banana"
          </label>
          <div className="space-y-2">
            {["option1", "option2", "option3", "option4"].map((option) => (
              <input
                key={option}
                type="text"
                id={option}
                name={option}
                placeholder={`Option ${option.charAt(option.length - 1)}`}
                className="block w-full p-3 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                value={quiz[option]}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        {/* Reverse Order */}
        <div>
          <label htmlFor="reverse" className="block text-gray-700 font-medium">
            Identify if any word is written in reverse order: "mirror, racecar, level, elephant"
          </label>
          <input
            type="text"
            id="reverse"
            name="reverse"
            className="mt-1 block w-full p-3 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            value={quiz.reverse}
            onChange={handleChange}
          />
        </div>

        {/* Blending Sounds */}
        <div>
          <label htmlFor="blend" className="block text-gray-700 font-medium">
            Blend these sounds into a word: /f/ + /l/ + /i/ + /p/
          </label>
          <input
            type="text"
            id="blend"
            name="blend"
            className="mt-1 block w-full p-3 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            value={quiz.blend}
            onChange={handleChange}
          />
        </div>

        {/* Recall Words */}
        <div>
          <label htmlFor="recall" className="block text-gray-700 font-medium">
            Recall as many words as you can from this list: "house, tree, car, book, dog, cat, ball, flower"
          </label>
          <input
            type="text"
            id="recall"
            name="recall"
            className="mt-1 block w-full p-3 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
            value={quiz.recall}
            onChange={handleChange}
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm">
            Could not process the quiz. Please try again.
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
          onClick={() => setCurrentPage("FormScore")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
