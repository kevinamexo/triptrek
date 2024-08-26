import Image from "next/image";
import { MdInfo } from "react-icons/md";
const TripCard = () => {
  return (
    <div className="bg-white flex rounded-md text-slate-700 mt-3">
      <div className="h-[120px] w-[120px]">
        <Image
          src={
            "https://tourscanner.com/blog/wp-content/uploads/2023/05/things-to-do-in-Side.jpg"
          }
          alt="Side, Turkey"
          quality={80}
          width={0}
          height={0}
          sizes="100vh"
          style={{ height: "100%", width: "auto", objectFit: "cover" }}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col items-start justify-center px-3 py-3">
        <p className="font-medium text-[14px]">Side, Turkey</p>
        <p className="text-[12px]">Mon 12 - Fri 16 Jul (5 days)</p>
        <div className="text-[12px] mt-3 flex items-center gap-1">
          <MdInfo className="font-bold" />
          In 100 days
        </div>
      </div>
    </div>
  );
};

export default TripCard;
