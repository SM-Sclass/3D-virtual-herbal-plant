import Showcase from "./component/Showcase"
import Feature from "./component/Feature"
import LowerSection from "./component/LowerSection"
export default function Home() {
  return (
    <main className="min-h-screen bg-green-950">
        <Showcase/>
        <Feature/>
        <LowerSection/>
    </main>
  );
}
