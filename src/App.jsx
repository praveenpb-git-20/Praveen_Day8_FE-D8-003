import "./App.css";
import Service from "./components/Service";
import Team from "./components/Team";
import ResponsiveLayout from "./components/ResponsiveLayout";

function App() {
  return (
    <div className="app">

      <header>
        <h1>FlowTrack 360</h1>
        <p>Empowering Teams with Smarter Workflows</p>
      </header>

      <ResponsiveLayout>
        <Service
          icon="💻"
          title="Web Development"
          description="Modern responsive websites using React."
        />

        <Service
          icon="📱"
          title="Mobile Apps"
          description="Android & iOS application development."
        />

        <Service
          icon="☁️"
          title="Cloud Services"
          description="Secure cloud deployment and hosting."
        />
      </ResponsiveLayout>

      <h2 className="heading">Meet Our Team</h2>

      <ResponsiveLayout>
        <Team
          name="Praveen"
          role="Frontend Developer"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />

        <Team
          name="Girish"
          role="UI/UX Designer"
          image="https://randomuser.me/api/portraits/men/54.jpg"
        />

        <Team
          name="Vinay"
          role="Backend Developer"
          image="https://randomuser.me/api/portraits/men/68.jpg"
        />
      </ResponsiveLayout>

    </div>
  );
}

export default App;