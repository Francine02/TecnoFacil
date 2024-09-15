import { Objectives } from "../components/Objectives";
import { Hero } from "../components/Hero";

export function Home() {
    return (
        <div className="mx-4 sm:mx-6 lg:mx-16 pt-20">
            <Hero />
            <Objectives/>
        </div>
    )
}