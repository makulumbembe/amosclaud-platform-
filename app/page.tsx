const navigation = [
  "Home",
  "Services",
  "AI Studio",
  "Packages",
  "Documentation",
  "Community",
  "Contact",
];

export default function HomePage() {
  return (
    <main>
      <nav>
        <strong>Amosclaud</strong>
        <div>
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="home">
        <h1>Amosclaud Platform</h1>
        <p>Create, develop, launch, and manage digital services from one platform.</p>
      </section>

      {navigation.slice(1).map((item) => (
        <section key={item} id={item.toLowerCase().replaceAll(" ", "-")}>
          <h2>{item}</h2>
          <p>{item} tools and content coming soon.</p>
        </section>
      ))}
    </main>
  );
}https://amosclaud-platform-4o49.vercel.app
