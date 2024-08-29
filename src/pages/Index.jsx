import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-x-4">
            <span className="font-semibold">Syntropic Living Art Expo</span>
            <span className="font-semibold">Total Wellbeing Immersion</span>
            <span className="font-semibold">Regenerative Leadership Summit</span>
          </div>
          <Link to="/get-involved">
            <Button variant="outline">Get Involved</Button>
          </Link>
        </div>
      </nav>

      <header className="container mx-auto text-center py-20">
        <h1 className="text-6xl font-bold mb-4">Experience regeneration.</h1>
        <h2 className="text-4xl mb-8">Thrive with the forest.</h2>
        <div className="space-x-4">
          <Button size="lg">Become a Community Member</Button>
          <Link to="/get-involved">
            <Button variant="outline" size="lg">Get Involved</Button>
          </Link>
        </div>
        <p className="mt-4 text-blue-600 hover:underline cursor-pointer">Learn more…</p>
      </header>

      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Conscious Living Space</h3>
            <p>Live in a nourishing environment with people who value evolving a healing sanctuary together.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Sacred Medicine Space</h3>
            <p>Enjoy a mindfully designed environment continuously optimizing for healing – with care for mind, body, and spirit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Permaculture Farmstead</h3>
            <p>Taste the freshest foods grown beyond organically for optimal taste, nutrition, and regeneration.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold mb-2">Connect with us</h4>
              <div className="space-x-2">
                {/* Replace with actual icons */}
                <span>YouTube</span>
                <span>LinkedIn</span>
                <span>Telegram</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Events</h4>
              <ul>
                <li>Syntropic Living Art Expo</li>
                <li>Total Wellbeing Immersion</li>
                <li>Regenerative Leadership Summit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Blog</h4>
              <p>Game Guide</p>
            </div>
            <div>
              <Link to="/get-involved">
                <Button>Get Involved</Button>
              </Link>
              <p className="mt-2 text-blue-600 hover:underline cursor-pointer">Learn more</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
