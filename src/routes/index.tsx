import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshay Gabrieal R — Software & AI/ML Engineer" },
      { name: "description", content: "Final-year CSE engineer building AI, full-stack, and cybersecurity projects. Explore projects, skills, and experience." },
      { property: "og:title", content: "Akshay Gabrieal R — Software & AI/ML Engineer" },
      { property: "og:description", content: "AI, full-stack and cybersecurity portfolio." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});