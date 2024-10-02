import Image from 'next/image';

export const blogs = {
  "Understanding-Ayurveda-The-Science-of-Life": {
    title: "Understanding Ayurveda: The Science of Life",
    content: (
      <>
        <Image
          src="/assets/img/ayurveda/ayurveda.png"
          alt="Ayurveda"
          className="w-full max-w-lg h-auto my-4 rounded-md shadow-md"
          width={800}
          height={600}
        />
        <p className="text-lg leading-relaxed my-4">
          Ayurveda is an ancient system of medicine that originated in India
          over 3,000 years ago. It is based on the belief that health and
          wellness depend on a delicate balance between the mind, body, and
          spirit. The word &apos;Ayurveda&apos; is derived from the Sanskrit words &apos;Ayur&apos;
          (life) and &apos;Veda&apos; (knowledge), which means the knowledge of life.
        </p>

        <h2 className="text-3xl font-semibold my-4">
          Key Principles of Ayurveda
        </h2>
        <p className="text-lg leading-relaxed my-4">
          Ayurveda emphasizes the individual&apos;s constitution and their unique
          balance of the three doshas: Vata, Pitta, and Kapha. Each person has a
          specific combination of these elements, which determines their
          physical and emotional characteristics.
        </p>

        <h2 className="text-3xl font-semibold my-4">
          Treatment Approaches
        </h2>
        <p className="text-lg leading-relaxed my-4">
          Treatment in Ayurveda may include a combination of dietary changes,
          herbal remedies, yoga, meditation, and lifestyle adjustments. It aims
          to restore balance to the body and mind to promote overall well-being.
        </p>
      </>
    ),
  },
  "Understanding-Homeopathy-A-Gentle-Approach-to-Healing": {
    title: "Understanding Homeopathy: A Gentle Approach to Healing",
    content: (
      <>
        <Image
          src="/assets/img/homeo/homeopathy.png"
          alt="Homeopathy"
          className="w-full max-w-lg h-auto my-4 rounded-md shadow-md"
          width={800}
          height={600}
        />
        <p className="text-lg leading-relaxed my-4">
          Homeopathy is a holistic form of medicine that treats patients using
          highly diluted substances, aiming to trigger the body&apos;s natural
          healing processes. Developed by Samuel Hahnemann in the late 18th
          century, homeopathy is based on the principle of &apos;like cures like.&apos;
        </p>

        <h2 className="text-3xl font-semibold my-4">
          How Homeopathy Works
        </h2>
        <p className="text-lg leading-relaxed my-4">
          Homeopathic treatments are individualized, meaning practitioners
          consider the entire person, including their physical, emotional, and
          mental health. By using remedies tailored to each patient&apos;s unique
          symptoms, homeopathy seeks to restore balance and health.
        </p>

        <h2 className="text-3xl font-semibold my-4">
          Benefits of Homeopathy
        </h2>
        <p className="text-lg leading-relaxed my-4">
          Homeopathy is known for its gentle and non-toxic nature, making it
          suitable for all ages, including infants and pregnant women. It can be
          effective for various conditions, including allergies, asthma,
          migraines, and more.
        </p>
      </>
    ),
  },
};
