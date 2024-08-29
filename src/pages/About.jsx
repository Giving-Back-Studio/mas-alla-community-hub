import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="container mx-auto text-center py-20">
        <h1 className="text-6xl font-bold mb-4">Choose your adventure.</h1>
        <h2 className="text-4xl mb-8">Come as you are.</h2>
        <h3 className="text-3xl font-semibold mb-4">About Más Allá</h3>
      </header>

      <section className="container mx-auto py-8">
        <p className="mb-4">
          Welcome to Más Allá, a sanctuary where nature, creativity, and community thrive together. Our purpose is to cultivate a space where people, plants, and animals can live in harmony, regenerating consciousness and inspiring a new wave of social enterprise creation. At Más Allá, we believe in the power of living syntropically—integrating principles of nature into every aspect of life to create systems that support growth, healing, and sustainability.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Our Long-Term Vision</h3>
        <p className="mb-4">
          We envision Más Allá as a flourishing ecosystem where human ingenuity meets nature's wisdom. Our goal is to create a self-sustaining, regenerative community that serves as a model for living in harmony with the Earth. This vision includes expanding our sanctuary with thoughtfully designed spaces like tiny houses, a yoga shala, and vibrant permaculture gardens. We see Más Allá as a hub for creative expression, where events like the Syntropic Living Art Expo bring people together to explore new ways of being and living.
        </p>
        <p className="mb-4">
          As we grow, we aspire to attract like-minded individuals who share our commitment to syntropic living, and who will help us build a community rooted in purpose, connection, and sustainability. By fostering partnerships and securing investments that align with our values, we aim to create a thriving environment that supports both personal and collective transformation.
        </p>

        <h3 className="text-2xl font-semibold mb-4">How to Get Involved</h3>
        <p className="mb-4">
          Más Allá is more than just a place; it's a movement. Whether you're drawn to the land, the people, or the principles we stand for, we invite you to become a part of our journey. Join us as a community member, attend one of our events, or support our vision as a community angel.
        </p>

        <div className="text-center mt-8">
          <Link to="/get-involved">
            <Button size="lg">Get Involved</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;