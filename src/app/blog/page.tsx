import React from "react";
import BlogClientUI from "@/components/BlogClientUI";
import { getBlogs } from "@/lib/getBlogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Blog & Resources | Lara Labs",
  description: "Learn how to use AI agents, RAG systems, and workflow automation to scale your business. Read our latest insights, guides, and case studies.",
  keywords: ["AI automation blog", "AI business guides", "AI agents for business", "Lara Labs blog"],
};

export default async function BlogPage() {
    const blogs = await getBlogs();

    return <BlogClientUI blogs={blogs} />;
}
