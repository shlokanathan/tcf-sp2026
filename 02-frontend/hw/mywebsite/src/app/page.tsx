export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
        <h1 className="text-4xl font-bold tracking-tight">Shloka Nathan</h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Hi! I’m Shloka. I’ma first year at Northeastern University. I’m studying finance and data science, and I'm from CT. I love to play tennis, ski, big Celtics and Pats fan, and read.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white"
            href="https://github.com/shlokanathan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-800"
            href="www.linkedin.com/in/shloka-nathan"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}