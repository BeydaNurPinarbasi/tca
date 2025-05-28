// src/pages/models.tsx

import ModelList from "../components/ModelList";

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ModelList showAll />
    </main>
  );
}
