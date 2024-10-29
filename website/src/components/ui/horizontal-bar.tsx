const HorizontalBar: React.FC<{ percentage: number; label: string; alternateNumericLabel?: string }> = ({ percentage, label, alternateNumericLabel }) => {
  // Ensure percentage is clamped between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="flex items-center justify-between w-full mb-2" aria-label={label}>
      <span className="text-sm font-semibold w-3/5 text-left">{label}</span>
      <div className="w-1/5 bg-gray-300 h-4 rounded-full relative text-left">
        <div
          className="bg-purple-500 h-full rounded-full"
          style={{ width: `${clampedPercentage}%` }}
        />
      </div>
      <span className="ml-2 w-1/5 text-sm font-bold text-left">
        {alternateNumericLabel ? alternateNumericLabel : `${clampedPercentage}%`}
      </span>
    </div>
  );
};

export default HorizontalBar;
