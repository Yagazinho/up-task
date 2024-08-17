import React, { useEffect, useState } from "react";

const Radio: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(() => {
    return localStorage.getItem("selectedOption") || "";
  });

  const [discountCode, setDiscountCode] = useState("");
  const [isValidCode, setIsValidCode] = useState(true);
  const [generatedCode, setGeneratedCode] = useState("");
  const [notes, setNotes] = useState<string>("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    localStorage.setItem("selectedOption", value);
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDiscountCode(value);

    const discountPattern = /^[A-Za-z0-9]+$/;
    setIsValidCode(discountPattern.test(value));
  };

  const generateCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
      setGeneratedCode(code);
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  useEffect(() => {
    const savedOption = localStorage.getItem("selectedOption");
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);
  return (
    <div className="flex flex-col p-4 items-start">
      <label htmlFor="" className="mb-2 text-lg font-medium">
        Select Option:
      </label>
      <label htmlFor="" className="inline-flex items-center mb-2">
        <input
          type="radio"
          name="option"
          value="a"
          checked={selectedOption === "a"}
          onChange={handleOptionChange}
          className="form-radio text-purple-600 h4 w4"
        />
        <span className="ml-2 text-gray-800">Option A</span>
      </label>
      <label htmlFor="" className="inline-flex items-center mb-2">
        <input
          type="radio"
          name="option"
          value="b"
          checked={selectedOption === "b"}
          onChange={handleOptionChange}
          className="form-radio text-purple-600 h4 w4"
        />
        <span className="ml-2 text-gray-800">Option B</span>
      </label>
      <label htmlFor="" className="inline-flex items-center mb-2">
        <input
          type="radio"
          name="option"
          value="c"
          checked={selectedOption === "c"}
          onChange={handleOptionChange}
          className="form-radio text-purple-600 h4 w4"
        />
        <span className="ml-2 text-gray-800">Option C</span>
      </label>

      <div className="mt-4">
        <label htmlFor="discount" className="block text-lg font-medium mb-2">
          Enter Discount Code:
        </label>
        <input
          type="text"
          id="discount"
          value={discountCode}
          onChange={handleDiscountChange}
          className={`form-input px-4 py-2 border rounded-md w-full focus:outline-none ${
            isValidCode ? "border-gray-300" : "border-red-500"
          }`}
          placeholder="Enter Discount Code"
        />
        {!isValidCode && (
          <p className="text-red-500 text-sm mt-1">Invalid Discount code</p>
        )}
      </div>

      <div className="mt-4">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
          onClick={generateCode}
        >
          Generate Disount Code
        </button>
        {generatedCode && (
          <p className="mt-2 text-lg font-medium text-gray-800">
            Generated Code: {generatedCode}
          </p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="" className="block text-lg font-medium mb-2">
          Enter Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          rows={4}
          onChange={handleNotesChange}
          placeholder="Enter Comments..."
          className="form-text-area px-4 py-2 border rounded-md w-full focus:outline-none border-gray-300"
        />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-800">
        Your Comments: {notes || "No comments entered yet"}
      </p>
    </div>
  );
};

export default Radio;
