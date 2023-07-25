Pace.on('done',()=>{
    console.log(4444444444444444444444);
    var content = document.querySelector('#body-wrap');
    content.style.display = 'flex !important';

    const cunstomFn = {
        randomBanner() {
          let e = [
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.2/bgWebp/guanlangaoshou1.webp",
                author: "《灌篮高手》",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.2/bgWebp/guanlangaoshou3.webp",
                author: "《灌篮高手》",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.2/bgWebp/shumabaobei1.webp",
                author: "《数码宝贝》",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.0/bgWebp/1.webp",
                author: "《铃芽户缔》",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.0/bgWebp/2.webp",
                author: "《机车女孩》",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.0/bgWebp/3.webp",
                author: "『死亡搁浅』",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.0/bgWebp/4.webp",
                author: "《双城之战lol》",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.0/bgWebp/5.webp",
                author: "『魔兽世界』",
                authorUrl: "#",
              },
              {
                img: "https://npm.elemecdn.com/randompic_nianzhu@1.0.0/bgWebp/index2.webp",
                author: "TacoSauceNinja",
                authorUrl: "https://www.deviantart.com/",
              },
              {
                img: "https://pic.rmb.bdstatic.com/bjh/61f572f4aea11a75f1156334c391e0615225.jpeg",
                author: "《深海2023》",
                authorUrl: "#",
              },
              {
                img: "https://pic.rmb.bdstatic.com/bjh/faaede56ed111437079e13ce3eff82a53476.jpeg",
                author: "《大鱼海棠》",
                authorUrl: "#",
              },
              {
                img: "https://pic.rmb.bdstatic.com/bjh/b1345a39c398a565d5ded39ea8601cc46990.jpeg",
                author: "FlorentLlamas",
                authorUrl: "https://www.deviantart.com/florentllamas",
              },
              {
                img: "https://pic.rmb.bdstatic.com/bjh/d41f61b59a85a1326d75f6d02b93d2768654.jpeg",
                author: "《流浪地球》",
                authorUrl: "#",
              },
            ],
            t = Math.floor(Math.random() * e.length),
            a = e[t].img || "",
            n = e[t].author || "",
            o = e[t].authorUrl || "",
            r = document.querySelector(".home-banner"),
            m = document.querySelector(".banner-author"),
            h = document.querySelector(".banner-author-name");
          r &&
            ((r.style.backgroundImage = "url(" + a + ")"),
            n
              ? ((m.style.display = "inline-block"),
                m.setAttribute("href", o),
                (h.textContent = n))
              : (m.style.display = "none"));
        },
      };
      cunstomFn.randomBanner();
    
    
    
    
      class Typing {
        constructor(opts) {
          this.opts = opts || {}
          this.source = opts.source
          this.output = opts.output
          this.delay = opts.delay || 250
          this.chain = {
            parent: null,
            dom: this.output,
            val: []
          }
          if (!(typeof this.opts.done === "function"))
            this.opts.done = function () {}
        }
    
        init() {
          //初始化函数
          this.chain.val = this.convert(this.source, this.chain.val)
        }
    
        convert(dom, arr) {
          //将dom节点的子节点转换成数组，
          let children = Array.from(dom.childNodes)
          for (let i = 0; i < children.length; i++) {
            let node = children[i]
            if (node.nodeType === 3) {
              arr = arr.concat(node.nodeValue.split("")) //将字符串转换成字符串数组，后面打印时才会一个一个的打印
            } else if (node.nodeType === 1) {
              let val = []
              val = this.convert(node, val)
              arr.push({
                dom: node,
                val: val
              })
            }
          }
          return arr
        }
    
        print(dom, val, callback) {
          setTimeout(function () {
            dom.appendChild(document.createTextNode(val))
            callback()
          }, this.delay)
        }
    
        play(ele) {
          //当打印最后一个字符时，动画完毕，执行done
          if (!ele.val.length) {
            if (ele.parent) this.play(ele.parent)
            else this.opts.done()
            return
          }
          let current = ele.val.shift() //获取第一个元素，同时删除数组中的第一个元素
          if (typeof current === "string") {
            this.print(ele.dom, current, () => {
              this.play(ele) //继续打印下一个字符
            })
          } else {
            let dom = current.dom.cloneNode() //克隆节点，不克隆节点的子节点，所以不用加参数true
            ele.dom.appendChild(dom)
            this.play({
              parent: ele,
              dom,
              val: current.val
            })
          }
        }
    
        start() {
          this.init()
          this.play(this.chain)
        }
      }
      let source = document.getElementById("sub-title")
      let output = document.getElementById("subtitle")
      let typing = new Typing({
        source,
        output
      })
      typing.start()
    console.log(666666666666);
})