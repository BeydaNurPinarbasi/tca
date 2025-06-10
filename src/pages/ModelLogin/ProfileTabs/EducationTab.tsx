import { Link } from "react-router-dom";

type Education = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  watchUrl: string;
};

const mockEducationData: Education[] = [
  {
    id: "1",
    title: "Online Model Academy",
    subtitle: "Model Training",
    imageUrl: "/images/online-model-academy.png", // senin görselin buraya
    watchUrl: "/education/1", // eğitimi izleme sayfası url'si
  },
];

export default function EducationTab() {
  return (
    <div className="space-y-8">
      {mockEducationData.map((edu) => (
        <div key={edu.id} className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={edu.imageUrl}
            alt={edu.title}
            className="w-full md:w-1/3 rounded-lg shadow"
          />
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-bold text-neutral-900">{edu.title}</h2>
            <p className="text-lg text-neutral-600">{edu.subtitle}</p>
            <Link
              to={edu.watchUrl}
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-full transition"
            >
              Eğitimi İzle
              <span className="text-lg">➤</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
