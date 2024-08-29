import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <section className="container mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's make magic.</h2>
          <p className="text-xl mb-8">Join an event – or host your own.</p>
          <Button size="lg">Explore Event Portal</Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enjoy time on the ground.</h2>
          <p className="text-xl mb-8">Live & learn together on the farm.</p>
          <Button size="lg">Explore Membership Opportunities</Button>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Gift and you shall receive.</h2>
          <p className="text-xl mb-8">Invest in regeneration.</p>
          <Button size="lg">Explore Philanthropic Investment</Button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;