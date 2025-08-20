const teamMembers = [
  {
    name: "MIANGOLA",
    role: "PRÉSIDENTE",
    image: "/images/Miangola.png",
  },
  {
    name: "ZIGGY",
    role: "VICE-PRÉSIDENTE",
    image: "/images/Ziggy.png",
  },
  {
    name: "LANJA",
    role: "SECRÉTAIRE",
    image: "/images/Lanja.png",
  },
  {
    name: "NIAINA",
    role: "TRÉSORIÈRE",
    image: "/images/Niaina.png",
  },
  {
    name: "NY",
    role: "ASSISTANT FINANCIER",
    image: "/images/Ny.png",
  },
  {
    name: "JESSICA",
    role: "CONSEILLÈRE",
    image: "/images/Jessica.png",
  },
];

function EquipeComponent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="membre" className="text-3xl font-bold text-center text-emerald-700 mb-6">
          Notre Équipe
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Une équipe soudée par l'envie d'aider, unie par les mêmes objectifs et
          portée par une vocation commune. Ensemble, nous avançons avec passion
          et détermination pour faire la différence. Je vous présente notre
          équipe !
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-emerald-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipeComponent;
