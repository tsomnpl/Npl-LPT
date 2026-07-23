import { ChangeEventHandler } from "react";

type InputFieldProps = {
  id: string;
  label: string;
  type: "text" | "email";
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  required?: boolean;
};

const InputField = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error = "",
  required = false
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-700 outline-none transition duration-300 focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-300" : "border-slate-300"
        }`}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
