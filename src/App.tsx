import { Github, Globe, Linkedin } from "lucide-react";

function App() {
  const listItem = [
    {
      link: "https://www.linkedin.com/in/nur-rahmat-khairi/",
      icon: <Linkedin />,
      label: "Linked In",
    },
    {
      link: "https://github.com/nrahmatk",
      icon: <Github />,
      label: "Github",
    },
    {
      link: "https://aitostudio.web.app/",
      icon: <Globe />,
      label: "Personal Website",
    },
  ];

  return (
    <div className="w-screen h-screen bg-linear-to-br from-gray-800 to-gray-900 text-white flex items-center select-none">
      <div className="grid md:grid-cols-2 items-center max-w-xl mx-auto gap-8 md:gap-16">
        <div className="space-y-2 text-center">
          <h1 className="font-semibold text-2xl">Nur Rahmat Khairi</h1>
          <h2 className="font-light tracking-[3px]">Software Developer</h2>
        </div>
        <div className="space-y-3">
          {listItem.map((item) => (
            <div key={item.label}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 py-2 px-3.5 rounded-2xl hover:bg-gray-700 active:scale-[98%] transition-transform"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
