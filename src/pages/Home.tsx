import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build faster with <span className="text-indigo-600">LaunchPad</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The modern platform for launching your ideas. Secure authentication, real-time dashboard, and production-ready infrastructure.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-indigo-400 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Everything you need to ship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '⚡ Fast Setup',
                desc: 'Get started in seconds. No complex configuration needed — just register and go.',
                color: 'bg-indigo-50 border-indigo-100'
              },
              {
                title: '🔒 Secure Auth',
                desc: 'Industry-standard JWT authentication. Your data is encrypted and protected.',
                color: 'bg-green-50 border-green-100'
              },
              {
                title: '📊 Real Dashboard',
                desc: 'Track your activity, manage your account, and monitor your progress.',
                color: 'bg-amber-50 border-amber-100'
              },
            ].map((f, i) => (
              <div key={i} className={`${f.color} border rounded-2xl p-8 text-left`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 text-lg">Join thousands of users already building on LaunchPad.</p>
          <Link
            to="/register"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-semibold text-white mb-2">LaunchPad</p>
          <p className="text-sm">© 2026 LaunchPad. Built with care.</p>
        </div>
      </footer>
    </div>
  )
}
