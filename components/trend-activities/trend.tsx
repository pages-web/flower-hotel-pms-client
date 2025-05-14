import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import Image from "../ui/image";
import { IPost } from "@/types/cms";

export default function Trend({ posts }: { posts: IPost[] }) {
  return (
    <div className="container py-8">
      <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/services/${post._id}`}
            className={index === 1 ? "lg:col-span-2" : ""}
          >
            <div className="h-full bg-white group transition-all ">
              <div className="h-[200px] overflow-hidden flex items-center">
                <Image
                  src={post.thumbnail.url}
                  width={600}
                  height={600}
                  className="h-full w-full"
                />
              </div>

              <div className="space-y-2 py-7">
                <h3 className="text-textmd md:text-textxl font-bold">
                  {post.title}
                </h3>
                <p className="text-textsm md:text-textmd line-clamp-4 text-black/40">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
