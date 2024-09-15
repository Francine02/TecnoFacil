import { Objectives } from "../components/home/Objectives";
import { Hero } from "../components/home/Hero";
import { Faq } from "../components/home/faq/Faq";
import { Footer } from "../components/home/Footer";

export function Home() {
    return (
        <div className="mx-4 sm:mx-6 lg:mx-16 pt-20">
            <Hero />
            <Objectives/>
            <Faq/>
            <Footer/>
        </div>
    )
}