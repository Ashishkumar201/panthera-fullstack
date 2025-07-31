import { useState } from "react";

export default function MarketView() {
  const cardClass = "p-4 bg-white rounded-xl shadow text-center";

  const [data, setData] = useState([
    { msa: "Orlando-Kissimmee", closed: 8000 },
    { msa: "Austin-Round Rock", closed: 9200 },
    { msa: "Miami-Fort Lauderdale", closed: 7500 },
    { msa: "Dallas-Fort Worth", closed: 8700 },
    { msa: "San Diego", closed: 6400 },
  ]);

  const [sortOrder, setSortOrder] = useState("asc");

  const sortByClosed = () => {
    const sorted = [...data].sort((a, b) =>
      sortOrder === "asc" ? b.closed - a.closed : a.closed - b.closed
    );
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="space-y-6 px-8 py-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-left">
        <h1 className="text-3xl font-bold text-blue-900">Market View</h1>
        <p className="text-gray-500">Lorem ipsum</p>
      </div>

      {/* Gradient Banner for Market View an*/}
      <div className="bg-gradient-to-r from-black via-purple-900 to-blue-800 text-white rounded-2xl p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-2">
          Revolutionising Real Estate with Data Insights
        </h1>
        <p className="text-white text-sm max-w-xl">
          Harness actionable intelligence to simplify, optimise, and transform your real estate strategies.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium">
            Discover now
          </button>
          <button className="text-white underline font-medium">Watch video</button>
        </div>
      </div>

      {/* Two-Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sortable Table */}
        <div className={cardClass}>
          <h3 className="text-lg font-semibold mb-2">Top 10 MSA by Homes Closed</h3>
          <table className="table-auto w-full text-left text-sm">
            <thead className="text-gray-400 border-b cursor-pointer">
              <tr>
                <th>MSA</th>
                <th onClick={sortByClosed}>
                  Homes Closed {sortOrder === "asc" ? "↑" : "↓"}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-t">
                  <td>{row.msa}</td>
                  <td>{row.closed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leaving other 3 tables untoched for now and will do it later if needed */}
        <div className={cardClass}>
          <h3 className="text-lg font-semibold mb-2">Top 10 MSA by Average Price Increase</h3>
          <table className="table-auto w-full text-left text-sm">
            <thead className="text-gray-400 border-b">
              <tr><th>MSA</th><th>Price Increase</th></tr>
            </thead>
            <tbody>
              {Array(10).fill().map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td>Orlando-Kissimmee-Sanford</td>
                  <td>16%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold mb-2">Top 10 MSA by Sales Pace</h3>
          <table className="table-auto w-full text-left text-sm">
            <thead className="text-gray-400 border-b">
              <tr><th>MSA</th><th>Homes Closed</th></tr>
            </thead>
            <tbody>
              {Array(10).fill().map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td>Orlando-Kissimmee-Sanford</td>
                  <td>8000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold mb-2">Top 10 MSA by New Homes Added</h3>
          <table className="table-auto w-full text-left text-sm">
            <thead className="text-gray-400 border-b">
              <tr><th>MSA</th><th>Price Increase</th></tr>
            </thead>
            <tbody>
              {Array(10).fill().map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td>Orlando-Kissimmee-Sanford</td>
                  <td>16%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
