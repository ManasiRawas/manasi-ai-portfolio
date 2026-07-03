export default function Contact() {
    return (
      <section className="py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
  
          {/* Heading */}
          <div>
            <h2 className="text-4xl font-bold">
              Let’s Build Something Impactful
            </h2>
            <p className="text-gray-400 mt-3">
              Open to Data Analyst, BI Engineer, Data Scientist & AI Engineer roles globally
            </p>
          </div>
  
          {/* Value Statement */}
          <p className="text-gray-300 max-w-2xl mx-auto">
            I specialize in turning data into actionable insights, building automated systems,
            and developing machine learning solutions that improve business decisions.
            Let’s connect if you’re hiring or collaborating on data-driven products.
          </p>
  
          {/* Contact Details (RESTORED + ENHANCED) */}
          <div className="text-gray-400 text-sm space-y-2 pt-4">
            <p>📍 Pune, India</p>
            <p>📧 manasirawas26@gmail.com</p>
            <p>📞 +91-9860792769</p>
  
            <p>
              🔗 GitHub:{" "}
              <a
                href="https://github.com/ManasiRawas"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                github.com/ManasiRawas
              </a>
            </p>
  
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/manasi-rawas-analytics"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/manasi-rawas-analytics
              </a>
            </p>
          </div>
  
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
  
            <a
              href="mailto:manasirawas26@gmail.com"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition font-medium"
            >
              Email Me
            </a>
  
            <a
              href="https://linkedin.com/in/manasi-rawas-analytics"
              target="_blank"
              className="px-6 py-3 border border-white/20 hover:border-white rounded-xl transition"
            >
              Connect on LinkedIn
            </a>
  
            <a
              href="https://github.com/ManasiRawas"
              target="_blank"
              className="px-6 py-3 border border-white/20 hover:border-white rounded-xl transition"
            >
              View GitHub
            </a>
  
          </div>
  
          {/* Trust / Proof */}
          <div className="text-sm text-gray-500 pt-6 space-y-1">
            <p>✔ 3+ years in Data Analytics, BI & AI</p>
            <p>✔ Built 15+ dashboards & automation systems</p>
            <p>✔ Improved reporting efficiency by up to 30%</p>
          </div>
  
        </div>
      </section>
    );
  }