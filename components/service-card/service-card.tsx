import { Link } from "@/i18n/routing";
import { IPost } from "@/types/cms";
import Image from "../ui/image";
import { Button } from "../ui/button";

const ServiceCard = ({ post }: { post: IPost }) => {
  return (
    <Link href={`/services/${post._id}`}>
      <div className="h-full bg-white shadow-lg group transition-all md:hover:shadow-2xl md:hover:-translate-y-2">
        <div className="max-h-[500px] overflow-hidden flex items-center">
          {post.thumbnail?.url && (
            <Image
              src={post.thumbnail?.url}
              width={600}
              height={600}
              className="h-full w-full"
            />
          )}
        </div>

        <div className="space-y-2 p-4 md:p-7">
          <h3 className="text-textmd md:text-displayxs">{post.title}</h3>
          <p className="text-textsm md:text-textmd font-bold text-black/40">
            {post.excerpt}
          </p>
          <Button className="font-bold">Detail</Button>
        </div>
      </div>
    </Link>
  );
};
export default ServiceCard;
