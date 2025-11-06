import React, { useEffect, useMemo, useState } from "react";

const Label = ({ children }) => (
  <label className="block text-xs font-semibold text-[#18324b] mb-1">
    {children}
  </label>
);

const Helper = ({ show }) =>
  show ? (
    <p className="text-[11px] text-gray-500 mt-1">Please fill in all required fields.</p>
  ) : null;

const FieldWrap = ({ error, children }) => (
  <div
    className={`rounded border bg-white ${
      error ? "border-red-400" : "border-gray-300"
    }`}
  >
    {children}
  </div>
);

const StepBasicDetails = ({ data, onChange, onNext, stepText }) => {
  const [touched, setTouched] = useState({});
  const set = (k, v) => onChange({ [k]: v });

  // total builtup area (auto)
  const total = useMemo(() => {
    const g = parseFloat(data.ground || 0);
    const f = parseFloat(data.first || 0);
    const s = parseFloat(data.second || 0);
    const t = (g || 0) + (f || 0) + (s || 0);
    if (!Number.isFinite(t)) return "";
    return t ? String(t) : "";
  }, [data.ground, data.first, data.second]);

  useEffect(() => {
    onChange({ total });
  }, [total]); // eslint-disable-line

  // validations
  const errors = {
    name: !data.name,
    mobile: !/^\d{10,15}$/.test(data.mobile || ""),
    email: !/^\S+@\S+\.\S+$/.test(data.email || ""),
    location: !data.location,
    plotArea: !data.plotArea,
    landFacing: !data.landFacing,
    ground: !data.ground,
    first: !data.first,
    // second optional
    total: !total,
  };

  const allValid = Object.entries(errors)
    .filter(([k]) => k !== "second")
    .every(([, v]) => v === false);

  const markTouched = (k) => setTouched((t) => ({ ...t, [k]: true }));

  return (
    <div className="bg-gray-50 border rounded-md overflow-hidden">
      {/* Title strip */}
      <div className="bg-[#0f2f57] text-white text-xs md:text-sm px-4 py-2 flex items-center justify-between">
        <span className="font-bold">Basic Details:</span>
        <span className="opacity-80">{stepText}</span>
      </div>

      <div className="p-4 md:p-6">
        {/* row 1 */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Label>
              Name <span className="text-red-500">*</span>
            </Label>
            <FieldWrap error={touched.name && errors.name}>
              <input
                className="w-full px-3 py-2 text-sm outline-none rounded"
                placeholder="Name"
                value={data.name}
                onChange={(e) => set("name", e.target.value)}
                onBlur={() => markTouched("name")}
              />
            </FieldWrap>
            <Helper show={touched.name && errors.name} />
          </div>

          <div>
            <Label>
              Mobile Number <span className="text-red-500">*</span>
            </Label>
            <FieldWrap error={touched.mobile && errors.mobile}>
              <input
                className="w-full px-3 py-2 text-sm outline-none rounded"
                placeholder="Mobile"
                value={data.mobile}
                onChange={(e) => set("mobile", e.target.value.replace(/[^\d]/g, ""))}
                onBlur={() => markTouched("mobile")}
              />
            </FieldWrap>
            <Helper show={touched.mobile && errors.mobile} />
          </div>
        </div>

        {/* row 2 */}
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div>
            <Label>
              Email <span className="text-red-500">*</span>
            </Label>
            <FieldWrap error={touched.email && errors.email}>
              <input
                className="w-full px-3 py-2 text-sm outline-none rounded"
                placeholder="Email id"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                onBlur={() => markTouched("email")}
              />
            </FieldWrap>
            <Helper show={touched.email && errors.email} />
          </div>

          <div>
            <Label>
              Site Location <span className="text-red-500">*</span>
            </Label>
            <FieldWrap error={touched.location && errors.location}>
              <input
                className="w-full px-3 py-2 text-sm outline-none rounded"
                placeholder="Location"
                value={data.location}
                onChange={(e) => set("location", e.target.value)}
                onBlur={() => markTouched("location")}
              />
            </FieldWrap>
            <Helper show={touched.location && errors.location} />
          </div>
        </div>

        {/* Land Area */}
        <div className="mt-6">
          <p className="text-[#18324b] text-sm font-bold">Land Area:</p>
          <div className="grid md:grid-cols-2 gap-5 mt-3">
            <div>
              <Label>
                Plot Area <span className="text-red-500">*</span>
              </Label>
              <FieldWrap error={touched.plotArea && errors.plotArea}>
                <input
                  className="w-full px-3 py-2 text-sm outline-none rounded"
                  placeholder="Enter your Sq.ft values"
                  value={data.plotArea}
                  onChange={(e) => set("plotArea", e.target.value)}
                  onBlur={() => markTouched("plotArea")}
                />
              </FieldWrap>
              <Helper show={touched.plotArea && errors.plotArea} />
            </div>

            <div>
              <Label>
                Land Facing <span className="text-red-500">*</span>
              </Label>
              <FieldWrap error={touched.landFacing && errors.landFacing}>
                <select
                  className="w-full px-3 py-2 text-sm outline-none rounded bg-white"
                  value={data.landFacing}
                  onChange={(e) => set("landFacing", e.target.value)}
                  onBlur={() => markTouched("landFacing")}
                >
                  <option value="">Select</option>
                  <option>East</option>
                  <option>West</option>
                  <option>North</option>
                  <option>South</option>
                </select>
              </FieldWrap>
              <p className="text-[11px] text-gray-500 mt-1">
                Please select a value for the Land Facing dropdown.
              </p>
            </div>
          </div>
        </div>

        {/* Build Up Area */}
        <div className="mt-6">
          <p className="text-[#18324b] text-sm font-bold">Build Up Area (Approx.):</p>

          <div className="grid md:grid-cols-2 gap-5 mt-3">
            <div>
              <Label>Ground Floor <span className="text-red-500">*</span></Label>
              <FieldWrap error={touched.ground && errors.ground}>
                <input
                  className="w-full px-3 py-2 text-sm outline-none rounded"
                  placeholder="Enter your Sq.ft values"
                  value={data.ground}
                  onChange={(e) => set("ground", e.target.value.replace(/[^\d.]/g, ""))}
                  onBlur={() => markTouched("ground")}
                />
              </FieldWrap>
              <Helper show={touched.ground && errors.ground} />
            </div>

            <div>
              <Label>First Floor <span className="text-red-500">*</span></Label>
              <FieldWrap error={touched.first && errors.first}>
                <input
                  className="w-full px-3 py-2 text-sm outline-none rounded"
                  placeholder="Enter your Sq.ft values"
                  value={data.first}
                  onChange={(e) => set("first", e.target.value.replace(/[^\d.]/g, ""))}
                  onBlur={() => markTouched("first")}
                />
              </FieldWrap>
              <Helper show={touched.first && errors.first} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-3">
            <div>
              <Label>Second Floor</Label>
              <FieldWrap error={false}>
                <input
                  className="w-full px-3 py-2 text-sm outline-none rounded"
                  placeholder="Enter your Sq.ft values"
                  value={data.second}
                  onChange={(e) => set("second", e.target.value.replace(/[^\d.]/g, ""))}
                />
              </FieldWrap>
              <p className="text-[11px] text-gray-500 mt-1">
                * If you want to add third or above floor, you can add that sq.ft values in second floor box
              </p>
            </div>

            <div>
              <Label>Total BuiltUp Area</Label>
              <FieldWrap error={touched.total && errors.total}>
                <input
                  readOnly
                  className="w-full px-3 py-2 text-sm outline-none rounded bg-gray-100"
                  placeholder="Total BuildUp Area"
                  value={data.total}
                  onBlur={() => markTouched("total")}
                />
              </FieldWrap>
              <Helper show={touched.total && errors.total} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            disabled={!allValid}
            onClick={onNext}
            className={`px-6 py-2 rounded-full text-white text-sm font-semibold
              ${allValid ? "bg-[#ff7a1a] hover:opacity-95" : "bg-gray-300 cursor-not-allowed"}
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepBasicDetails;
