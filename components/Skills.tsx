export default function Skills() {
    return (
      <section className="py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto space-y-12">
  
          {/* Title */}
          <div>
            <h2 className="text-4xl font-bold">
              Skills That Power My Work
            </h2>
            <p className="text-gray-400 mt-2">
              From data analysis → automation → machine learning systems
            </p>
          </div>
  
          {/* Story Blocks */}
          <div className="space-y-10">
  
            {/* 1 - Data Foundation */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400">
                📊 Data Foundation
              </h3>
              <p className="text-gray-300 mt-2">
                I started by transforming raw data into meaningful business insights
                through structured analysis and reporting systems.
              </p>
              <p className="text-gray-400 mt-2">
                SQL · Python (Pandas, NumPy) · Excel · Data Cleaning · EDA · Statistical Analysis
              </p>
            </div>
  
            {/* 2 - Business Intelligence */}
            <div>
              <h3 className="text-xl font-semibold text-purple-400">
                📈 Business Intelligence & Storytelling
              </h3>
              <p className="text-gray-300 mt-2">
                I built dashboards that helped leadership teams move from guesswork
                to data-driven decisions.
              </p>
              <p className="text-gray-400 mt-2">
                Power BI (DAX) · Tableau · KPI Reporting · Dashboard Design · Data Visualization
              </p>
            </div>
  
            {/* 3 - Automation */}
            <div>
              <h3 className="text-xl font-semibold text-green-400">
                ⚙️ Automation & Data Engineering
              </h3>
              <p className="text-gray-300 mt-2">
                I automated repetitive reporting and built pipelines that reduced
                manual work and improved delivery speed.
              </p>
              <p className="text-gray-400 mt-2">
                Apache Airflow · ETL Pipelines · Workflow Automation · Git · GitHub
              </p>
            </div>
  
            {/* 4 - AI / ML */}
            <div>
              <h3 className="text-xl font-semibold text-pink-400">
                🤖 AI & Machine Learning
              </h3>
              <p className="text-gray-300 mt-2">
                I moved into predictive systems, building models that forecast
                patterns and improve decision accuracy.
              </p>
              <p className="text-gray-400 mt-2">
                Scikit-learn · Regression · Classification · Clustering · Feature Engineering · Model Evaluation
              </p>
            </div>
  
            {/* 5 - System Thinking */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                🧠 Product & System Thinking
              </h3>
              <p className="text-gray-300 mt-2">
                I connect business problems with technical solutions through structured
                requirements and scalable design thinking.
              </p>
              <p className="text-gray-400 mt-2">
                Stakeholder Management · Agile · Requirements Gathering · Process Optimization · Project Coordination
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }