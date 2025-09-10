import { Link } from "@/i18n/routing";
import { IPost } from "@/types/cms";
import Image from "../ui/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
const RestaurantCard = ({ post }: { post: IPost }) => {
  const t = useTranslations("restran");
  return (
    <Link href={`/dining/${post._id}`}>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
        {/* Image Section */}
        {post.thumbnail?.url && (
          <div className="w-full h-60 md:h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
            <Image
              src={post.thumbnail.url}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              alt={post.title}
            />
          </div>
        )}
        {/* Text Section */}
        <div className="p-5 md:p-7 flex flex-col justify-between space-y-3 flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            {post.title}
          </h3>
          <p className="text-sm md:text-base font-medium text-gray-500 line-clamp-3">
            {post.excerpt}
          </p>
          <Button className="mt-auto bg-primary text-white hover:bg-primary-dark font-semibold">
            {t("Detail")}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
