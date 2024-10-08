import { getTags } from "../_lib/post";
import TagList from "../_component/tag-list";
import ListHeading from "../_component/list-heading";
import { Metadata } from "next";

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <section className="py-3 md:py-4 flex flex-col gap-6">
      <ListHeading text="태그 목록" />
      <TagList tags={tags} />
    </section>
  );
}

export const metadata: Metadata = {
  title: "태그 목록",
  description: "태그 목록 페이지",
};
