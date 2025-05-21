export function Preloader() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="relative w-12 h-12">
        {}
        <div
          className="absolute inset-0 rounded-full border-4 opacity-50 animate-pulse"
          style={{ borderColor: "var(--color-accent)" }}
        ></div>
        {}
        <div
          className="absolute inset-0 rounded-full border-4 border-t-[var(--color-accent)] border-r-transparent border-b-[var(--color-accent)] border-l-transparent animate-spin"
        ></div>
      </div>
    </div>
  );
}
