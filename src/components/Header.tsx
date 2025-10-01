import reactLogoImg from "@/assets/react-logo.png";

export default function Header() {
  return (
    <header className="flex items-center gap-8">
      <img src={reactLogoImg} alt="React" className="w-14 aspect-square" />

      <div>
        <h2 className="text-3xl text-cyan-400 font-bold">React.js</h2>
        <p className="text-cyan-100">
          i.e., using the React library for rendering the UI
        </p>
      </div>
    </header>
  );
}
