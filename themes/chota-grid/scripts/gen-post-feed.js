hexo.extend.generator.register("postsjson", function (locals) {
  const url = this.config.url;

  const posts = locals.posts.sort("-date").map((post) => {
    const image = post.featured_img || post.img || "";
    const img = image ? `${url}/assets/img/lg_${image.split(".")[0]}.webp` : "";
    const thumbnail = image ? `${url}/assets/img/thumbnail_${image.split(".")[0]}.webp` : "";
    return {
      title: post.title,
      subtitle: post?.subtitle || "",
      slug: post.slug,
      date: post.date.format("YYYY-MM-DD"),
      thumbnail,
      img,
      categories: post.categories.map((category) => category.name),
      excerpt:
        post.content
          .replace(/(<([^>]+)>)/gi, "")
          .substring(0, 200)
          .trim() + (post.content.length > 200 ? "..." : ""),
      url: post.permalink,
    };
  });
  return {
    path: "data/posts.json",
    data: JSON.stringify({ posts: posts }, null, 2),
    layout: false,
  };
});
