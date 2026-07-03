export default function Projects() {
    return (
      <section className="py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto space-y-12">
  
          {/* Title */}
          <div>
            <h2 className="text-4xl font-bold">
              Projects That Drive Impact
            </h2>
            <p className="text-gray-400 mt-2">
              Real-world systems built for automation, intelligence & decision-making
            </p>
          </div>
  
          <div className="space-y-10">
  
            {/* Project 1 */}
            <div className="border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400">
                AI-Powered Business Insights Platform
              </h3>
  
              <p className="mt-3 text-gray-300">
                <span className="text-white font-medium">Problem:</span>
                &nbsp;Business teams lacked unified insights from fragmented datasets.
              </p>
  
              <p className="mt-2 text-gray-300">
                <span className="text-white font-medium">Solution:</span>
                &nbsp;Built an AI-driven analytics system combining SQL, Python, and ML models
                to generate automated business insights.
              </p>
  
              <p className="mt-2 text-gray-300">
                <span className="text-white font-medium">Impact:</span>
                &nbsp;Improved decision-making speed by reducing manual analysis effort by 30%.
              </p>
  
              <p className="mt-3 text-gray-400">
                Tools: Python · SQL · Power BI · Machine Learning · Data Pipelines
              </p>
            </div>
  
            {/* Project 2 */}
            <div className="border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-400">
                Reporting Automation Initiative
              </h3>
  
              <p className="mt-3 text-gray-300">
                <span className="text-white font-medium">Problem:</span>
                Manual reporting processes were slow and error-prone.
              </p>
  
              <p className="mt-2 text-gray-300">
                <span className="text-white font-medium">Solution:</span>
                Designed automated ETL + reporting pipelines using Python and Airflow.
              </p>
  
              <p className="mt-2 text-gray-300">
                <span className="text-white font-medium">Impact:</span>
                Reduced reporting time by 30% and eliminated repetitive manual tasks.
              </p>
  
              <p className="mt-3 text-gray-400">
                Tools: Apache Airflow · Python · SQL · Power BI · ETL Pipelines
              </p>
            </div>
  
            {/* Project 3 */}
            <div className="border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-400">
                Business Intelligence Transformation Program
              </h3>
  
              <p className="mt-3 text-gray-300">
                <span className="text-white font-medium">Problem:</span>
                Leadership lacked real-time KPI visibility across operations.
              </p>
  
              <p className="mt-2 text-gray-300">
                <span className="text-white font-medium">Solution:</span>
                Built interactive BI dashboards using Power BI and Tableau with automated data flows.
              </p>
  
              <p className="mt-2 text-gray-300">
                <span className="text-white font-medium">Impact:</span>
                Improved reporting efficiency by 25% and enabled real-time decision tracking.
              </p>
  
              <p className="mt-3 text-gray-400">
                Tools: Power BI · Tableau · SQL · Excel · Data Modeling
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }