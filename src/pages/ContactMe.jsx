import { useState } from "react";

const initial = {
  email: "",
  phone: "",
  name: "",
  address: "",
  content: "",
  newsletter: false,
};

const inputClass =
  "w-full border-b border-neutral-600 bg-transparent py-1 text-xs outline-none focus:border-orange-500";

export default function ContactMe() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // ยังไม่ได้ส่งไปไหน แค่แสดงใน console
    setSent(true);
    setForm(initial);
  };

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">
        Contact <span className="text-orange-500">Me</span>
      </h2>
      <p className="text-[10px] text-neutral-400">Let's get in touch!</p>

      <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <label className="text-[10px] text-orange-500">
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
          </label>
          <label className="text-[10px] text-orange-500">
            Phone
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
          </label>
          <label className="text-[10px] text-orange-500">
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputClass} />
          </label>
          <label className="text-[10px] text-orange-500">
            Address
            <input type="text" name="address" value={form.address} onChange={handleChange} className={inputClass} />
          </label>
        </div>

        <label className="text-[10px] text-orange-500">
          Content
          <textarea name="content" rows={3} value={form.content} onChange={handleChange} required className={inputClass} />
        </label>

        <label className="flex items-center gap-2 text-[10px] text-neutral-400">
          <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
          I would like to receive the newsletter
        </label>

        <button type="submit" className="w-40 rounded bg-orange-600 py-1 text-xs font-semibold hover:bg-orange-500">
          Submit
        </button>

        {sent && <p className="text-[10px] text-green-400">Message sent. Thank you!</p>}
      </form>
    </section>
  );
}