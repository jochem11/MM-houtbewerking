import ContentSection from "@/components/content-section/content-secion";
import Image from "next/image";
import { Layout } from "@/layouts/layout";

export default function Home() {
  return (
    <Layout title="M&M Houtbewerking" backgroundHeaderImg={"/images/header-background.png"}>
      <ContentSection 
        title={"Welkom bij M&M Houtbewerking"}
        content={<p><strong>M&M Houtbewerking</strong> is dé specialist in maatwerk stoelen en houtbewerking. Al meer dan twintig jaar leveren wij hoogwaardige houten producten voor diverse sectoren, van de meubelindustrie tot projectinrichting. Wij combineren traditionele ambacht met moderne technieken, zoals CNC-machines, om de hoogste kwaliteit en klanttevredenheid te garanderen.</p>}
        image={<Image src="/images/header-background.png" alt={"hoi"} height={200} width={600} />} 
        imagePosition={"left"} 
      />
      <ContentSection title={"Onze Diensten"} content={
        <>
          <p>Van het frezen en draaien van meubels tot het produceren van maatwerk stoelframes, bij M&M Houtbewerking bent u aan het juiste adres voor:</p>
          <ul>
            <li>Meubelproductie</li>
            <li>Projectinrichting</li>
            <li>Stoelproductie</li>
            <li>Frezen en draaien</li>
          </ul>
        </>} />
    </Layout>
  );
}

