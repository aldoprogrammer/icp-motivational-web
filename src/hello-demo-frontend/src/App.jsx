import { useState } from 'react';
import { hello_demo_backend } from 'declarations/hello-demo-backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true); // Start loading

    hello_demo_backend.motivation(name, job)
      .then((greeting) => {
        setGreeting(greeting);
        setIsLoading(false); // End loading
      })
      .catch((error) => {
        setGreeting("Something went wrong. Please try again.");
        setIsLoading(false); // End loading even on error
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <header className="text-center">
          <img src="/logo2.svg" alt="DFINITY logo" className="w-20 mx-auto" />
          <h1 className="text-3xl font-semibold text-gray-800 mt-4">Motivational App</h1>
        </header>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg text-gray-600">Enter your name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="job" className="block text-lg text-gray-600">Choose your dream job:</label>
            <select
              id="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select a Job --</option>
              <option value="Investor">Investor</option>
              <option value="Programmer">Programmer</option>
              <option value="CEO">CEO</option>
              <option value="Designer">Designer</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Motivation
          </button>
        </form>

        <div className="mt-6 text-center">
          {isLoading ? (
            <div className="text-blue-600 font-semibold text-xl">Loading...</div>
          ) : (
            <section className="text-lg font-semibold text-gray-800 mt-4">{greeting}</section>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
