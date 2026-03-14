import * as React from "react";
import { TestimonialSlider } from "./ui/testimonial-slider-1";

// 1. Define the review data
const reviews = [
  {
    id: 1,
    name: "ANKIT BHARTI",
    quote:
      "I am a multidisciplinary visual storyteller specializing in photography, cinematography, and video editing. I seamlessly blend technical precision with creative vision to produce compelling, high-quality media across diverse professional platforms.",
    // Image from the provided screenshot
    imageSrc:
      "https://i.ibb.co/JjdyTqDt/IMG-0740.jpg",
    thumbnailSrc:
      "https://i.ibb.co/JjdyTqDt/IMG-0740.jpg",
  },
  {
    id: 2,
    name: "Aman A Lal",
    affiliation: "Creative Video Editor & Graphic Designer",
    quote:
      "specializes in video editing, graphic designing, and advertisement content creation. He also works on writing ad scripts, planning creative concepts, and directing models during shoots, guiding them on how to perform scenes effectively to deliver the right message.",
    // Image from the provided screenshot
    imageSrc:
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/4fb3212a-216a-4224-a5d6-166dd4116a9b.jpeg",
    thumbnailSrc:
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/4fb3212a-216a-4224-a5d6-166dd4116a9b.jpeg",
  },
  {
    id: 3,
    name: "Mr. Harshal Alvin",
    affiliation: "Founder of HDS ADVERTISEMENTS",
    quote:
      "A creative advertising and digital marketing company. He started the company with a vision to help brands grow through innovative promotions, social media marketing",
    // Thumbnail from the provided screenshot
    imageSrc:
      "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/file_000000004b44720887d3dc5d883db170-imagetourl.cloud-1773488471145-byw2ec.png",
    thumbnailSrc:
      "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/file_000000004b44720887d3dc5d883db170-imagetourl.cloud-1773488471145-byw2ec.png",
  },
  {
    id: 4,
    name: "Swara Sharma",
    affiliation: "Model and content creator, and the founder of the jewelry brand Shivara.",
    quote:
      "She has collaborated with various brands including clothing, cars, fashion, and lifestyle. With a strong on-camera presence and good command of speaking, she confidently represents brands and connects naturally with audiences.",
    // Thumbnail from the provided screenshot
    imageSrc:
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a3ab0a1e-c4b8-4d86-9508-44e2cbfb64ba.jpg",
    thumbnailSrc:
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a3ab0a1e-c4b8-4d86-9508-44e2cbfb64ba.jpg",
  },
];

// 2. Render the component with the data
export default function TestimonialSliderDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <TestimonialSlider reviews={reviews} />
    </div>
  );
}
