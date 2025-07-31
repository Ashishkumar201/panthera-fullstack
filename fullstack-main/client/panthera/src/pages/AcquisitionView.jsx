import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
// import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from "react-leaflet";
// import { EditControl } from "react-leaflet-draw";


export default function AcquisitionView() {
  const data = useMemo(() => [
    { builder: 'Blue Velvet Group', lots: '3 Roots', price: '$999,988', sqft: 4322, avgPrice: 699 },
    { builder: 'Mulholland Drive', lots: 'Tranquil Hills', price: '$899,000', sqft: 3210, avgPrice: 650 },
    { builder: 'Eraser Head', lots: 'Palm Vista', price: '$1,100,000', sqft: 4100, avgPrice: 720 },
    { builder: 'Lost Highway', lots: 'Sunset Grove', price: '$775,500', sqft: 2750, avgPrice: 580 },
    { builder: 'Twin Peaks', lots: 'Maple Estate', price: '$840,700', sqft: 3000, avgPrice: 610 },
  ], []);

  const columns = useMemo(() => [
    { Header: 'Builder', accessor: 'builder' },
    { Header: 'Lots', accessor: 'lots' },
    { Header: 'Price', accessor: 'price' },
    { Header: 'Sq. ft', accessor: 'sqft' },
    { Header: 'Average Price / Sq.ft', accessor: 'avgPrice' },
  ], []);

  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  return (
    <div className="p-8 space-y-6">
      {/* Banner */}
      <div className="rounded-2xl overflow-hidden relative h-52 bg-gradient-to-r from-purple-700 to-black text-white p-6">
        <h1 className="text-2xl font-bold">Revolutionising Real Estate with Data Insights</h1>
        <p className="mt-2 max-w-md">Harness actionable intelligence to simplify, optimise, and transform your real estate strategies.</p>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded-md">Discover now</button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          ['Community', '1,781'],
          ['Total Homes', '1,781'],
          ['Average Price Per Sq Ft', '$207'],
          ['Total No. of Homes Sold', '169,580'],
          ['Sales Price', '$9999'],
          ['Price Increase', '$9999'],
        ].map(([label, value], idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        ))}
      </div>

      {/* Embedded Google Map */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.636026827418!2d-73.99108329322593!3d40.73061035632244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af180af52d%3A0x77f1a3cf36b593d1!2sNew%20York%20City!5e0!3m2!1sen!2sin!4v1617184324034!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112105.38001522316!2d76.96163236572383!3d28.4594966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18824e83f3fb%3A0x3e4a656256a5b799!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1692213324321!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>

      </div>

      {/* Dropdown Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {Array(6).fill("All").map((label, idx) => (
          <select
            key={idx}
            className="bg-white rounded-xl px-4 py-2 w-full text-gray-700 border border-gray-200"
          >
            <option>{label}</option>
          </select>
        ))}
      </div>

      {/* Sortable + Filterable Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="mb-4">
          <input
            value={state.globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <table {...getTableProps()} className="table-auto w-full text-sm text-left">
          <thead className="text-gray-500 border-b">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="pb-2 pr-4 cursor-pointer"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-t">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="py-2 pr-4">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
