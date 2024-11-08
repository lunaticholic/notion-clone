import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
  return (
    // Main Container
    <div className="min-h-full flex flex-col">
        {/* Content */}
        <div className="flex flex-col justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
            {/* Heading */}
            <Heading />
            {/* Heroes */}
            <Heroes />
        </div>
        <Footer />
    </div>
  );
}

export default MarketingPage;