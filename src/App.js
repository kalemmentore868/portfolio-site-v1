import "./App.css";
import Theme from "./styles/theme";
import "./styles/projectStyles.css";
import Acomplishments from "./components/Acomplishments/Acomplishments";
import BgAnimation from "./components/BackgrooundAnimation/BackgroundAnimation";
import ContactForm from "./components/ContactForm/ContactForm";
import Hero from "./components/Hero/Hero";

import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Timeline from "./components/TimeLine/TimeLine";
import WaterRippleAnimation from "./components/WaterRippleAnimation/WaterRippleAnimation";
import { Layout } from "./layout/Layout";
import { Section } from "./styles/GlobalComponents";

function App() {
  return (
    <Theme>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />

        <Section grid>
          <Technologies />
          <WaterRippleAnimation />
        </Section>
        <Timeline />
        <Acomplishments />
        <ContactForm />
      </Layout>
    </Theme>
  );
}

export default App;
