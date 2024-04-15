import HomeContent from "@/components/Home";
import LogoCompanies from "@/components/LogoCompanies";
import PricingContent from "@/components/Pricing";
import FeatureContent from "@/components/Feature";
import Integrations from "@/components/Integrations";

export default function Home() {
  return (
    <main className="overflow-y-scroll">
      <HomeContent />
      <LogoCompanies />
      <FeatureContent />
      <Integrations />
      <PricingContent />
    </main>
  );
}
