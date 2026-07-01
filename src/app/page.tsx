import Hero from "@/components/hero/Hero";
import WorkList from "@/components/work/WorkList";
import About from "@/components/sections/About";
import Now from "@/components/sections/Now";
import NotesPreview from "@/components/sections/NotesPreview";
import Colophon from "@/components/sections/Colophon";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <About />
      <Now />
      <NotesPreview />
      <Colophon />
      <Contact />
    </>
  );
}
