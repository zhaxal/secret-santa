import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ParticipantsForm from "./components/ParticipantsForm";
import ParticipantsList from "./components/ParticipantsList";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-8">
      <main className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 p-8">
          <h1 className="text-4xl font-bold text-center text-white">
            🎄 Admin Dashboard 🎄
          </h1>
        </div>
    
        <div className="p-8 space-y-12">
          {/* Participants Section */}
          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span role="img" aria-label="users">👥</span>
              Participants
            </h2>
    
            <ul className="space-y-4">
              {/* Participant Items */}
              <li className="flex items-center justify-between bg-white p-5 rounded-lg 
                shadow-sm border border-slate-200 hover:border-slate-300 
                hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="font-medium text-slate-700">John Doe</span>
                </div>
    
                <div className="flex items-center space-x-3">
                  <button className="inline-flex items-center bg-emerald-500 text-white 
                    font-medium py-2.5 px-4 rounded-lg hover:bg-emerald-600 
                    active:bg-emerald-700 transition-colors duration-200">
                    Approve
                  </button>
                  <button className="inline-flex items-center bg-red-500 text-white 
                    font-medium py-2.5 px-4 rounded-lg hover:bg-red-600 
                    active:bg-red-700 transition-colors duration-200">
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </section>
    
          {/* Event Controls Section */}
          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span role="img" aria-label="controls">🎮</span>
              Event Controls
            </h2>
    
            <div className="space-y-4">
              <button className="w-full bg-red-500 text-white font-bold py-4 px-6 
                rounded-lg hover:bg-red-600 active:bg-red-700 transition-all 
                duration-200 flex items-center justify-center space-x-2">
                <span>🎲</span>
                <span>Generate Pairings</span>
              </button>
    
              <button className="w-full bg-emerald-500 text-white font-bold py-4 
                px-6 rounded-lg hover:bg-emerald-600 active:bg-emerald-700 
                transition-all duration-200 flex items-center justify-center space-x-2">
                <span>🔒</span>
                <span>Close Form</span>
              </button>
    
              <button className="w-full bg-slate-200 text-slate-700 font-bold py-4 
                px-6 rounded-lg hover:bg-red-100 hover:text-red-700 
                active:bg-red-200 transition-all duration-200 flex items-center 
                justify-center space-x-2">
                <span>🔄</span>
                <span>Reset</span>
              </button>
            </div>
          </section>
    
          {/* Pairings Section */}
          <section className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span role="img" aria-label="gift">🎁</span>
              Pairings
            </h2>
    
            <ul className="space-y-4">
              <li className="flex items-center justify-between bg-white p-5 rounded-lg 
                shadow-sm border border-slate-200 hover:border-slate-300 
                hover:shadow-md transition-all duration-200">
                <span className="font-medium text-slate-700">John Doe</span>
                <button className="inline-flex items-center space-x-2 bg-emerald-500 
                  text-white font-medium py-2.5 px-4 rounded-lg hover:bg-emerald-600 
                  active:bg-emerald-700 transition-colors duration-200">
                  <span>📋</span>
                  <span>Copy link</span>
                </button>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

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
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
