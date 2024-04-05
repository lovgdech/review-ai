function Features() {
  return (
    <div className="w-full text-gray-700 bg-[#F5F5F5] py-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <h3 className="text-3xl font-bold text-center">What is AI?</h3>
        <p className="w-full text-lg text-center max-w-[1000px] mx-auto">
          AI, short for Artificial Intelligence, refers to the simulation of
          human intelligence processes by machines, especially computer systems.
          These processes include learning (the acquisition of information and
          rules for using the information), reasoning (using rules to reach
          approximate or definite conclusions), and self-correction. <br />
          <span className="font-medium"> Benefits of using ai:</span>
        </p>

        <div className="flex flex-col gap-4">
          <div className="w-full flex overflow-hidden overflow-x-auto gap-4 pb-4 scroll-smooth">
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">Automation</h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="automation.jpg"
                alt="automation image"
              />
              <p>
                AI technologies can automate repetitive tasks, thereby
                increasing efficiency and productivity. This frees up human
                workers to focus on more complex and creative tasks.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">Data Analysis</h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="dataanalysis.avif"
                alt="automation image"
              />
              <p>
                AI algorithms can analyze large volumes of data quickly and
                accurately, extracting valuable insights that can inform
                decision-making and drive business strategies.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">Personalization</h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="personalization.png"
                alt="automation image"
              />
              <p>
                AI-powered systems can personalize user experiences by analyzing
                user preferences and behavior, enabling targeted
                recommendations, content, and advertisements.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">
                Prediction and Forecasting
              </h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="predictionandforecasting.jpg"
                alt="automation image"
              />
              <p>
                AI models can predict future trends and outcomes based on
                historical data, helping businesses anticipate demand, mitigate
                risks, and optimize operations.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">Healthcare</h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="Healthcare.jpg"
                alt="automation image"
              />
              <p>
                AI technologies are transforming healthcare by aiding in disease
                diagnosis, drug discovery, personalized treatment plans, and
                patient monitoring, ultimately improving patient outcomes and
                reducing healthcare costs.
              </p>
            </div>
          </div>
          <div className="w-full flex overflow-hidden overflow-x-auto pb-4 gap-4 scroll-smooth">
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">
                Autonomous Systems
              </h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="autonomoussystems.png"
                alt="automation image"
              />
              <p>
                AI enables the development of autonomous systems such as
                self-driving cars, drones, and robots, which have the potential
                to revolutionize transportation, logistics, and manufacturing
                industries.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">
                Natural Language Processing
              </h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="NaturalLanguageprocessing.png"
                alt="automation image"
              />
              <p>
                AI-powered natural language processing (NLP) technologies enable
                machines to understand, interpret, and generate human language,
                facilitating applications like chatbots, virtual assistants, and
                language translation.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">
                Enhanced Customer Service
              </h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="EnhancedCustomerService.png"
                alt="automation image"
              />
              <p>
                AI-powered chatbots and virtual assistants provide 24/7 customer
                support, answering queries, resolving issues, and improving
                overall customer satisfaction.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">Fraud Detection</h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="FraudDetection.png"
                alt="automation image"
              />
              <p>
                AI algorithms can detect patterns of fraudulent behavior in
                financial transactions, helping organizations prevent financial
                losses and protect against cyber threats.
              </p>
            </div>
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2 cursor-pointer transition hover:bg-gray-50">
              <h4 className="text-lg font-bold text-center">
                Environmental Sustainability
              </h4>
              <img
                className="w-full h-32 rounded-md object-center object-cover"
                src="EnvironmentalSustainability.png"
                alt="automation image"
              />
              <p>
                AI technologies are being used to optimize energy consumption,
                manage natural resources more efficiently, and mitigate the
                impacts of climate change.
              </p>
            </div>
          </div>
        </div>
        <p className="w-full text-lg text-center max-w-[1000px] mx-auto">
          Overall, AI has the potential to revolutionize industries, enhance
          productivity, improve decision-making, and address complex challenges.
          However, it's crucial to consider ethical, privacy, and societal
          implications to ensure responsible development and deployment of AI
          technologies.
        </p>
      </div>
    </div>
  );
}

export default Features;
