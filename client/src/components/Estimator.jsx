import React, { useState } from "react";
import StepBasicDetails from "./StepBasicDetails";

const steps = [
  { key: "basic", label: "Basic Details" },
  { key: "mat1", label: "Material 1" },
  { key: "mat2", label: "Material 2" },
  { key: "finish", label: "Finish" },
];

const Stepper = ({ current }) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-8 md:gap-16">
        {steps.map((s, i) => {
          const active = i <= current;
          return (
            <div key={s.key} className="flex items-center">
              {/* circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full grid place-items-center border-2 ${
                    active
                      ? "bg-[#0aa66a] border-[#0aa66a] text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {i + 1}
                </div>
                <div
                  className={`mt-2 text-[11px] md:text-xs font-semibold ${
                    active ? "text-[#0aa66a]" : "text-gray-500"
                  }`}
                >
                  {s.label}
                </div>
              </div>
              {/* connector */}
              {i < steps.length - 1 && (
                <div className="w-16 md:w-24 h-0.5 mx-3 md:mx-6 bg-gray-200" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Estimator = () => {
  const [step, setStep] = useState(0);

  // Global form state (you can persist or send to server later)
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    plotArea: "",
    landFacing: "",
    ground: "",
    first: "",
    second: "",
    total: "",
  });

  const handleMerge = (partial) => setForm((p) => ({ ...p, ...partial }));

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 text-center">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-[#18324b]">
          CHECK YOUR DREAM HOUSE ESTIMATION
        </h1>
        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Fill all form fields to go to next step
        </p>

        <div className="mt-6">
          <Stepper current={step} />
        </div>
      </div>

      {/* Step content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 pb-20">
        {step === 0 && (
          <StepBasicDetails
            data={form}
            onChange={handleMerge}
            onNext={() => setStep(1)}
            stepText={`Step ${step + 1} - ${steps.length}`}
          />
        )}

        {step === 1 && (
          <div className="bg-gray-50 border rounded-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-700">Material 1</h3>
              <div className="text-xs text-gray-500">Step {step + 1} - {steps.length}</div>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              (Placeholder) Add your material selections here…
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep(0)}
                className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => setStep(2)}
                className="ml-auto px-5 py-2 rounded bg-[#ff7a1a] text-white hover:opacity-95"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-gray-50 border rounded-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-700">Material 2</h3>
              <div className="text-xs text-gray-500">Step {step + 1} - {steps.length}</div>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              (Placeholder) Add more material selections here…
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="ml-auto px-5 py-2 rounded bg-[#ff7a1a] text-white hover:opacity-95"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-gray-50 border rounded-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-700">Finish</h3>
              <div className="text-xs text-gray-500">Step {step + 1} - {steps.length}</div>
            </div>
            <pre className="mt-4 text-xs bg-white p-4 rounded border overflow-auto">
{JSON.stringify(form, null, 2)}
            </pre>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => alert("Submitted! (demo)")}
                className="ml-auto px-5 py-2 rounded bg-[#0aa66a] text-white hover:opacity-95"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Estimator;
