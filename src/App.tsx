import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="p-4 sm:p-8">
      <main className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <header className="bg-gradient-to-r from-red-600 to-red-500 p-6">
          <h1 className="text-4xl font-bold text-center text-white">
            🎅 Secret Santa 🎄
          </h1>
        </header>

        <div className="p-6 space-y-8">
          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span role="img" aria-label="gift">
                🎁
              </span>{" "}
              Participants
            </h2>
            <ul className="mt-4 space-y-3">
              {["Participant 1", "Participant 2", "Participant 3"].map(
                (participant, i) => (
                  <li
                    key={i}
                    className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 
                  hover:shadow-md transition-shadow duration-200"
                  >
                    {participant}
                  </li>
                )
              )}
            </ul>
          </section>

          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span role="img" aria-label="sparkles">
                ✨
              </span>{" "}
              Status
            </h2>
            <p className="mt-4 p-4 bg-white rounded-lg border border-slate-100">
              Not yet started
            </p>
          </section>

          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span role="img" aria-label="pencil">
                ✏️
              </span>{" "}
              Enter
            </h2>
            <form className="mt-4 space-y-4">
              <label className="block">
                <span className="text-slate-700 font-medium block mb-1">
                  Name
                </span>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-slate-200 
                    focus:ring-2 focus:ring-red-500 focus:border-red-500 
                    transition-shadow duration-200"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-bold py-3 px-6 rounded-lg
                  hover:bg-red-600 active:bg-red-700 transition-colors duration-200"
              >
                Enter
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="p-4 sm:p-8">
      <main className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-red-500">
          🎄 404 Not Found 🎄
        </h1>
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
