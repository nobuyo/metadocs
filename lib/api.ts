import fs from "fs";
import glob from "glob";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export interface Category {
  label: string;
  position: number;
  pages: Article[];
  slug: string;
}

export interface Article {
  slug: string;
  fullSlug: string;
  title: string;
  position: number;
  content: string;
}

export const getAllCategories = () => {
  return fs
    .readdirSync("docs", { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dir) => {
      const raw = fs.readFileSync(
        path.resolve("docs", dir.name, "_category_.json"),
        "utf-8"
      );
      const category = JSON.parse(raw) as Category;
      category.slug = dir.name.replace("/", "");

      const articles = glob
        .sync(path.resolve("docs", dir.name, "*.md"))
        .map((fileName: string): Article => {
          const raw = fs.readFileSync(fileName, "utf-8");
          const data = matter(raw).data;

          const slugFromFileName = fileName
            .split("/")
            .reverse()[0]
            .replace(".md", "");

          return {
            slug: data.slug ?? slugFromFileName,
            fullSlug: `/docs/${category.slug}/${data.slug ?? slugFromFileName}`,
            title: data.title ?? "",
            position: data.position,
            content: "",
          };
        })
        .sort((x, y) => x.position - y.position);
      category.pages = articles;

      return category;
    })
    .sort((x: Category, y: Category) => x.position - y.position);
};

export const getArticle = async (slug: string): Promise<Article> => {
  const raw = fs.readFileSync(`docs/${slug}.md`, "utf-8");
  const { data, content } = matter(raw);
  const result = await remark().use(html).use(remarkGfm).process(content);

  return {
    slug: data.slug,
    fullSlug: "",
    title: data.title,
    position: data.position,
    content: result.toString(),
  };
};
