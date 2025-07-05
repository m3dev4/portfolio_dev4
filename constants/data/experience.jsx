import { Badge } from "../../components/ui/badge";

export const experience = [
  {
    id: 1,
    title: "2024",
    content: (
      <div className="flex flex-col items-center w-full justify-center h-full space-y-2 relative">
        <h1 className="text-neutral-200 text-center text-2xl md:text-sm font-bold mb-3 flex-1">
          Développeur Full-Stack JavaScript Junior (stage)
        </h1>
        <div className="flex items-center gap-5  ">
          <Badge variant="secondary" className="background-one text-white">
            Potencia
          </Badge>
          <Badge variant="secondary" className="background-two text-black">
            Stage
          </Badge>
          <Badge variant="secondary" className="background-tree  text-black">
            Hybride
          </Badge>
        </div>
        <p className="text-sm font-semibold text-white leading-[3rem] tracking-widest text-center">
          Chez Potencia, une entreprise spécialisée dans le développement
          personnel et le coaching en leadership, j’ai été chargé de concevoir
          et développer une plateforme web interne visant à digitaliser leurs
          services et à améliorer l’interaction avec les clients.
        </p>
        <div className="flex items-start justify-start gap-6">
          <span className="text-white rounded-md text-sm font-semibold">
            03-2024
          </span>
          <span className="text-white text-sm font-semibold">11-2024</span>
        </div>
      </div>
    ),
  },
];

