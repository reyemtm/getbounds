const REG_NAMED_ARG = new RegExp(/\[([^=]+)=(.+)\]/)

/*https://github.com/toastsgithub/hexo-valkyr-url*/

hexo.extend.tag.register(`linkcard`, function(args, content){
    const opts = {}
    args.forEach(arg => {
        const matched = arg.match(REG_NAMED_ARG)
        opts[matched[1]] = matched[2]
    })

    const title = opts.title || opts.url || "";
    const url = opts.url || "";
    const desc = opts.desc || "";
    // TODO: Support default image or failed image placeholder
    const img =  opts.img || "";
    return `
      <div class="link-card">
        ${img ? `<a href="${url}"><img src="${img}" ></a>` : ""}
        <div class="desc-wrapper">
          <a href="${url}">
          <h3>${title}</h3>
          <hr />
          <div class="desc">${desc}</div>
          </a>
        </div>
      </div>
      `
}, {
    async: true
})