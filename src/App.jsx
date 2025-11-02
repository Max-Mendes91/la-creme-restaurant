function App() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-black)' }}>
      <div className="text-center">
        <h1 className="text-6xl mb-4" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-primary-gold)' }}>
          La Crème
        </h1>
        <p className="text-xl mb-8" style={{ color: 'var(--color-accent-white)', fontFamily: 'var(--font-family-sans)' }}>
          Tailwind v4 is working! 🎉
        </p>
        <button className="btn btn-primary">
          Reserve a Table
        </button>
      </div>
    </div>
  )
}

export default App
