// Estimator.jsx
import React, { useMemo, useState } from "react";
import {
  FaDraftingCompass,
  FaToolbox,
  FaDoorOpen,
  FaBrush,
  FaLightbulb,
  FaWrench,
  FaListUl,
  FaRedo,
  FaRupeeSign,
  FaInfoCircle,
} from "react-icons/fa";

/**
 * Responsive Construction Packages Estimator (JSX)
 * - TailwindCSS for styling
 * - Fully responsive
 * - Calculates total built-up area and package totals
 * - Per-package area override (defaults to total)
 */

const PACKAGES = [
  {
    id: "basic",
    name: "Basic Package",
    rate: 2350,
    accent: "#ea6a2a", // orange
    headerBg: "bg-gradient-to-tr from-black to-orange-900",
  },
  {
    id: "standard",
    name: "Standard Package",
    rate: 2450,
    accent: "#6b7280", // gray
    headerBg: "bg-gradient-to-tr from-black to-gray-900",
  },
  {
    id: "premium",
    name: "Premium Package",
    rate: 2650,
    accent: "#facc15", // yellow
    headerBg: "bg-gradient-to-tr from-black to-yellow-900",
  },
];

const FeatureRow = ({ icon, text }) => (
  <div className="flex items-center gap-3 py-3">
    <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-slate-100">
      {icon}
    </div>
    <p className="text-slate-700 text-sm md:text-base">{text}</p>
  </div>
);

const formatINR = (num) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(isNaN(num) ? 0 : num);

export default function Estimator() {
  // Built-up area per floor (sq.ft)
  const [floors, setFloors] = useState({ gf: 0, ff: 0, sf: 0 });

  // Selected package and (optional) custom area per package (defaults to total)
  const [selected, setSelected] = useState("premium");
  const [customAreas, setCustomAreas] = useState({});

  const totalArea = useMemo(() => {
    const v =
      (Number(floors.gf) || 0) +
      (Number(floors.ff) || 0) +
      (Number(floors.sf) || 0);
    return Math.max(0, v);
  }, [floors]);

  const sanitize = (v) => {
    if (v === "" || v === null || v === undefined) return 0;
    const n = Number(String(v).replace(/[^0-9.]/g, ""));
    return isNaN(n) ? 0 : n;
  };

  const onFloorChange = (key, val) => {
    setFloors((p) => ({ ...p, [key]: sanitize(val) }));
  };

  const areaForPkg = (id) => {
    const v = customAreas[id];
    const n = sanitize(v);
    return n > 0 ? n : totalArea;
  };

  const pkgTotal = (id, rate) => areaForPkg(id) * rate;

  const resetAll = () => {
    setFloors({ gf: 0, ff: 0, sf: 0 });
    setCustomAreas({});
    setSelected("premium");
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800 text-center">
          Please enter the Built-Up Area (Approx.)
        </h1>

        {/* Floor inputs */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <LabeledInput
            label="Ground Floor"
            value={floors.gf}
            onChange={(v) => onFloorChange("gf", v)}
          />
          <LabeledInput
            label="First Floor"
            value={floors.ff}
            onChange={(v) => onFloorChange("ff", v)}
          />
          <LabeledInput
            label="Second Floor"
            value={floors.sf}
            onChange={(v) => onFloorChange("sf", v)}
          />
          <LabeledInput label="Total Built-Up Area" value={totalArea} readOnly />
        </div>

        <div className="mt-2 flex items-center gap-2 text-slate-500 text-sm">
          <FaInfoCircle className="h-4 w-4" />
          <span>
            All values are in sq.ft. You can also override area inside each
            package.
          </span>
        </div>

        {/* Packages */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl shadow-sm border transition-all ${
                selected === pkg.id
                  ? "border-amber-400 shadow-amber-100 shadow-lg"
                  : "border-slate-200"
              } bg-white overflow-hidden`}
            >
              {/* Header */}
              <div className={`relative ${pkg.headerBg} text-white p-5`}>
                <div className="text-lg font-semibold">{pkg.name}</div>
                <div className="mt-2 flex items-center gap-1 text-white/90">
                  <FaRupeeSign className="h-5 w-5" />
                  <span className="text-xl md:text-2xl font-bold">
                    {pkg.rate.toLocaleString("en-IN")}
                  </span>
                  <span className="ml-1 text-sm md:text-base">/ sq.ft</span>
                </div>
                <div
                  className="absolute right-0 top-0 h-full w-40"
                  style={{
                    backgroundColor: pkg.accent,
                    clipPath: "polygon(100% 0, 0 40%, 100% 70%)",
                  }}
                />
              </div>

              {/* Body */}
              <div className="p-5">
                {/* Area override + Select */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="text-xs text-slate-500">
                      Area for this package (sq.ft)
                    </label>
                    <input
                      type="number"
                      min={0}
                      inputMode="numeric"
                      value={customAreas[pkg.id] ?? ""}
                      placeholder={String(areaForPkg(pkg.id))}
                      onChange={(e) =>
                        setCustomAreas((p) => ({
                          ...p,
                          [pkg.id]: e.target.value,
                        }))
                      }
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                    />
                  </div>

                  <button
                    onClick={() => setSelected(pkg.id)}
                    className={`mt-6 h-11 shrink-0 rounded-xl px-4 text-sm font-medium transition ${
                      selected === pkg.id
                        ? "bg-amber-400 text-black"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {selected === pkg.id ? "Selected" : "Select"}
                  </button>
                </div>

                {/* Feature list */}
                <div className="mt-5 border-t pt-4 divide-y">
                  <FeatureRow
                    icon={<FaDraftingCompass className="h-5 w-5" />}
                    text="Designs & Drawings"
                  />
                  <FeatureRow
                    icon={<FaToolbox className="h-5 w-5" />}
                    text="Civil Structure"
                  />
                  <FeatureRow
                    icon={<FaDoorOpen className="h-5 w-5" />}
                    text="Doors & Windows"
                  />
                  <FeatureRow
                    icon={<FaWrench className="h-5 w-5" />}
                    text="Tiles & Flooring"
                  />
                  <FeatureRow
                    icon={<FaLightbulb className="h-5 w-5" />}
                    text="Electrical & Plumbing"
                  />
                  <FeatureRow
                    icon={<FaBrush className="h-5 w-5" />}
                    text="Painting"
                  />
                  <FeatureRow
                    icon={<FaListUl className="h-5 w-5" />}
                    text="Miscellaneous"
                  />
                </div>

                {/* Totals */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs text-slate-500">Area used</div>
                    <div className="text-lg font-semibold text-slate-800">
                      {areaForPkg(pkg.id).toLocaleString("en-IN")} sq.ft
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs text-slate-500">Total Amount</div>
                    <div className="text-lg font-semibold text-slate-800">
                      {formatINR(pkgTotal(pkg.id, pkg.rate))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Selected package</div>
                <div className="text-base md:text-lg font-semibold capitalize">
                  {selected}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Grand Total</div>
                <div className="text-base md:text-lg font-bold text-slate-900">
                  {formatINR(
                    pkgTotal(
                      selected,
                      PACKAGES.find((p) => p.id === selected)?.rate || 0
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={resetAll}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800"
          >
            <FaRedo className="h-4 w-4" /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function LabeledInput({ label, value, onChange, readOnly = false }) {
  return (
    <div className="w-full">
      <label className="block text-sm text-slate-600 mb-1">{label}:</label>
      <input
        type="number"
        min={0}
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        readOnly={readOnly}
        className={`w-full rounded-2xl border px-4 py-2.5 outline-none transition focus:ring-2 focus:ring-slate-400 ${
          readOnly ? "bg-slate-100 border-slate-200" : "border-slate-300"
        }`}
      />
    </div>
  );
}
