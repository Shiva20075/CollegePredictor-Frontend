import Predictor from "./components/Predictor";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#1e1b4b] to-[#1e3a8a] px-8 md:px-16 py-10 flex items-center">

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
    
        {/* LEFT SIDE CONTENT */}
        <div className="text-white space-y-6">

          <span className="px-4 py-1  bg-white/20 rounded-full text-sm">
            Free • Instant Prediction
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Predict Your <br/>
            <span className="text-blue-200">
              College Instantly
            </span>
          </h1>

          <p className="text-blue-100 max-w-xl text-sm md:text-base">
            Choosing the right engineering college after EAPCET can be confusing.
            Our College Predictor helps students estimate which colleges they are
            most likely to get based on their entrance exam rank, category and gender.
          </p>

          <p className="text-blue-100 max-w-xl text-sm">
            By analyzing historical counselling cutoff data from previous years,
            this tool predicts colleges where you have the highest chance of
            admission. It helps students shortlist colleges and plan their
            counselling options more effectively.
          </p>

          {/* FEATURES */}
          <div className="flex gap-3 flex-wrap text-sm">

            <span className="bg-white/20 px-3 py-1 rounded-full">
              ⚡ Instant Prediction
            </span>

            <span className="bg-white/20 px-3 py-1 rounded-full">
              🎓 300+ Colleges
            </span>

            <span className="bg-white/20 px-3 py-1 rounded-full">
              📊 Accurate Data
            </span>

            <span className="bg-white/20 px-3 py-1 rounded-full">
              🔍 Smart Analysis
            </span>

          </div>

          {/* HOW TO USE */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 space-y-2 text-sm">

            <h3 className="font-semibold text-base">
              How to Use
            </h3>

            <ul className="text-blue-100 list-disc list-inside space-y-1">

              <li>Enter your entrance exam rank.</li>
              <li>Select your gender and reservation category.</li>
              <li>Choose the exam you appeared for.</li>
              <li>Click <strong>Predict College</strong>.</li>
              <li>See the predicted college instantly.</li>

            </ul>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex justify-center">
          <Predictor />
        </div>

      </div>

    </div>
  );
}

export default App;