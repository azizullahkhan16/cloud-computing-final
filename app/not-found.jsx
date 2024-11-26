import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
  description: "Sorry, the page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/assets/images/not-found.png"}
        height={700}
        width={700}
        className="object-contain"
        loading="lazy"
      />
    </div>
  );
}
