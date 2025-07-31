export default function MarketCard({ title, data, valueLabel }) {
  return (
    <div className="bg-white rounded-lg p-4 w-full shadow">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between text-sm text-gray-700">
            <span>{item.name}</span>
            <span>{item[valueLabel]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
