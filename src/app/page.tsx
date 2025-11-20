import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TwitchLive from "@/components/TwitchLive";
import BettingSites from "@/components/BettingSites";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <TwitchLive />
        <BettingSites />
      </main>
      <Footer />
    </div>
  );
}
