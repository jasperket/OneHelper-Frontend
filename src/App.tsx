import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white w-full border-b border-gray-300 h-16 flex items-center px-8 justify-between z-10">
          <div className="paytoneOne text-[35px] font-bold">
            <span className="text-orange-500">One</span>
            <span className="text-green-600">Helper</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="username"
              className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="password"
              placeholder="password"
              className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors duration-200 cursor-pointer">
              Log in
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200 cursor-pointer">
              Sign-up
            </button>
          </div>
        </header>

        {/* Hero Section with background image */}
        <section
          className="relative flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "500px",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-orange-900 opacity-50"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center py-16 w-full">
            <h1 className="text-[85px] font-bold leading-tight text-center text-white">
              Your All-In-One
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-green-600 text-transparent bg-clip-text">
                Digital Assistant
              </span>
            </h1>
            <p className="text-[25px] text-white mt-4 max-w-3xl mx-auto">
              Streamline your daily tasks, boost productivity, and get things
              done faster with OneHelper – the intelligent assistant that adapts
              to your workflow.
            </p>
          </div>
        </section>

        {/* Bottom Section with solid color */}
        <section className="bg-[#1B3A2F] flex-1  py-12 px-4 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
            <div className="bg-[#1E0901] rounded-lg p-8 text-white flex flex-col items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_4px_rgba(255,165,0,0.4)]">
              <div className="text-3xl mb-4">📅</div>
              <h2 className="text-2xl font-bold mb-2">Schedule</h2>
              <p>
                Streamline your daily tasks, boost productivity, and get things
                done faster with OneHelper – the intelligent assistant that
                adapts to your workflow.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1E0901] rounded-lg p-8 text-white flex flex-col items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer  hover:shadow-[0_0_20px_4px_rgba(255,165,0,0.4)]">
              <div className="text-3xl mb-4">🛌</div>
              <h2 className="text-2xl font-bold mb-2">Sleep</h2>
              <p>
                Track your sleep patterns and improve your rest with OneHelper’s
                smart sleep tracker.
              </p>
            </div>
            {/* Card 3 */}
            <div
              className="bg-[#1E0901] rounded-lg p-8 text-white flex flex-col items-center transform transition-transform duration-300
                    hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_4px_rgba(255,165,0,0.4)]"
            >
              <div className="text-3xl mb-4">📝</div>
              <h2 className="text-2xl font-bold mb-2">Plan</h2>
              <p>
                Organize your day and plan ahead efficiently using OneHelper’s
                planning tools.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
