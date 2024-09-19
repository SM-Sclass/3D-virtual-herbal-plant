import Showcase from "./component/Showcase"
import Feature from "./component/Feature"
import Refplant from "./component/Refplant"

export default function Home() {
  return (
    <main className="min-h-screen bg-green-950">
        <Showcase/>
        <Feature/>
        <Refplant/>
    </main>
  );
}
