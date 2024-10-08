"use client";
import React from "react";
import Themecard from "../../component/Themecard";
import Link from "next/link";

function Tour() {
  const themes = [
    {
      name: "Immunity Booster",
      cards: {
        image: "/assets/img/themes/medicinal.png",
        title: "Medicinal Theme",
        description:
          "Discover plants known for their medicinal properties that offer natural remedies and promote holistic health.",
        backgroundColor: "#D4B86C",
      },
    },
    {
      name: "Skincare",
      cards: {
        image: "/assets/img/themes/skincare.png",
        title: "Skincare Theme",
        description:
          "Explore plants with natural skincare benefits, known for enhancing beauty and promoting healthy, radiant skin.",
        backgroundColor: "#FF6F61",
      },
    },
    {
      name: "Haircare",
      cards: {
        image: "/assets/img/themes/haircare.png",
        title: "Haircare Theme",
        description:
          "Unveil the secrets of plants that nourish and strengthen hair, providing natural solutions for hair care.",
        backgroundColor: "#b53128",
      },
    },
    {
      name: "Medicinal",
      cards: {
        image: "/assets/img/themes/immunity_booster.png",
        title: "Immunity Booster Theme",
        description:
          "Delve into plants that are packed with nutrients and antioxidants, essential for boosting immunity and overall well-being.",
        backgroundColor: "#ccaa4e",
      },
    },
  ];

  return (
    <div className="w-full py-7 bg-green-700">
      <div className="flex flex-col gap-3 items-center text-center mb-16">
        <h2 className="text-yellow-500 text-3xl font-bold">Themes</h2>
        <p className="max-w-2xl text-white text-lg">
          Explore diverse plant themes that transform your space into a vibrant tapestry of nature&apos;s beauty and healing.
        </p>
      </div>
      <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2">
        {themes.map((theme) => (
          <Link
            key={theme.cards.title}
            href={`/Tour/${theme.name.toLowerCase().replace(/\s+/g, "")}`}
          >
            <div className="space-y-4 p-5 transition-transform duration-200 hover:shadow-2xl hover:-translate-y-2 bg-green-950 rounded-xl">
              <div
                className="text-2xl text-center font-bold text-white"
                style={{ color: theme.cards.backgroundColor }}
              >
                {theme.name}
              </div>
              <div className="flex justify-center">
                <Themecard
                  image={theme.cards.image}
                  title={theme.cards.title}
                  description={theme.cards.description}
                  backgroundColor={theme.cards.backgroundColor}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tour;
