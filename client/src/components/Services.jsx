import React from "react";
import ServiceCard from "./ServiceCard";

// swap these with your assets
import imgConstruction from "../assets/card1.jpg";
import imgPM from "../assets/card2.png";
import imgApproval from "../assets/card3.jpg";
import imgPromoters from "../assets/promoters.webp";

const Services = () => {
  const cards = [
    {
      title: "Constructions",
      image: imgConstruction,
      frontLines: [
        "We are",
        "specialized",
        "in Commercial",
        "and Residential",
        "properties",
      ],
      bullets: [
        "Commercial & Residential",
        "Structural & Finishing",
        "On-time delivery",
        "Quality & safety standards",
      ],
    },
    {
      title: "Project Management",
      image: imgPM,
      frontLines: [
        "Planning",
        "Coordination",
        "Budgeting",
        "Management",
        "Communication",
        "Execution",
      ],
      bullets: [
        "Planning & Coordination",
        "Budgeting & Cost Control",
        "Resource Management",
        "Communication & Execution",
      ],
    },
    {
      title: "Building Approval",
      image: imgApproval,
      frontLines: [
        "We can easily",
        "getting Building",
        "approval for",
        "your DREAM",
        "HOUSE",
      ],
      bullets: [
        "Plan drafting & submission",
        "Liaison with authorities",
        "Faster approval handling",
        "Compliance & documentation",
      ],
    },
    {
      title: "Promoters",
      image: imgPromoters,
      frontLines: [
        "Joint ventures its",
        "a way to combine",
        "resources &",
        "expertise to make",
        "the Project",
        "success",
      ],
      bullets: [
        "Joint ventures",
        "Combine expertise & capital",
        "Project strategy",
        "Market-ready delivery",
      ],
    },
  ].map((c) => ({ ...c, accent: "#ff661a" }));

  return (
    <section className=" py-12  sm:py-16 lg:py-20 ">
      <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f2230]">
            Our Services
          </h2>
          <div className="mt-3 h-[3px] w-12 bg-[#ff661a] mx-auto rounded-full" />
        </div>

        {/* Grid with consistent gutters on all screens */}
        <div
          className="
            grid
            gap-y-8 gap-x-6
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-y-10 lg:gap-x-8
            place-items-center
          "
        >
          {cards.map((c, i) => (
            <ServiceCard key={c.title} index={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
