import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ParticipantsForm from "./components/ParticipantsForm";
import ParticipantsList from "./components/ParticipantsList";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

function Home() {
  const [isFormClosed, setIsFormClosed] = useState(true);

  const fetchAppData = async () => {
    const docRef = await getDoc(doc(firestore, "system/app"));

    if (docRef.exists()) {
      const data = docRef.data();

      setIsFormClosed(data?.isFormClosed);
    }
  };

  useEffect(() => {
    fetchAppData();
  }, []);

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

            <ParticipantsList />
          </section>

          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span role="img" aria-label="sparkles">
                ✨
              </span>{" "}
              Status
            </h2>

            <p className="mt-4 p-4 bg-white rounded-lg border border-slate-100">
              {isFormClosed
                ? "Event started. Please wait for the link"
                : " Not yet started"}
            </p>
          </section>

          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span role="img" aria-label="pencil">
                ✏️
              </span>{" "}
              Enter
            </h2>
            <ParticipantsForm isClosed={isFormClosed} />
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
