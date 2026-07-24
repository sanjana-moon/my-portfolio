"use client";

import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 font-medium text-heading transition hover:border-primary hover:text-primary"
    >
      <ArrowLeft className="mr-2" size={18} />
      Go Back
    </button>
  );
}
