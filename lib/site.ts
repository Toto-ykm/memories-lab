export const site = {
  name: "Memories Lab",
  tagline: "大切な瞬間を、未来へ残す。",
  url: "https://memories-lab.example.com",
  description:
    "子どもの成長、家族の笑顔、人生の節目を、世界にひとつだけの高級オーダーメイドギフトとして残すブランドです。",
  lineUrl: "https://line.me/R/ti/p/@memorieslab",
  mailUrl:
    "mailto:hello@memories-lab.example.com?subject=Memories%20Lab%E3%81%B8%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87",
  email: "hello@memories-lab.example.com"
};

export const navItems = [
  { label: "商品一覧", href: "/products" },
  { label: "ギフトシーン", href: "/gift-scenes" },
  { label: "初めての方へ", href: "/first-time" },
  { label: "法人向け", href: "/business" },
  { label: "制作事例", href: "/works" },
  { label: "ご利用ガイド", href: "/guide" },
  { label: "FAQ", href: "/faq" }
];

export type Product = {
  slug: string;
  name: string;
  tier: "Premium" | "Standard" | "Entry" | "Gift Set" | "Business";
  price: string;
  size: string;
  delivery: string;
  image?: string;
  visual: "crystal" | "glass" | "panel" | "drinkware" | "coaster";
  summary: string;
  features: string[];
  uses: string[];
  caseText: string;
};

export const products: Product[] = [
  {
    slug: "mug",
    name: "マグカップ",
    tier: "Entry",
    price: "1,980円〜",
    size: "約300ml",
    delivery: "デザイン確定後 7〜14日",
    image: "/images/products/mug-mockup.png",
    visual: "drinkware",
    summary: "毎日の朝食やティータイムに、家族の写真と名前を自然に添えられるパーソナルギフトです。",
    features: ["写真・名前・短いメッセージに対応", "日常使いしやすい容量", "祖父母や職場への小さな贈り物に最適"],
    uses: ["誕生日", "母の日", "父の日", "ちょっとしたお礼"],
    caseText: "お孫さまの笑顔と手書き風メッセージを入れ、祖母への誕生日ギフトとして制作。毎朝使える記念品として喜ばれました。"
  },
  {
    slug: "crystal-block",
    name: "クリスタルブロック",
    tier: "Premium",
    price: "5,800円〜",
    size: "約80mm × 60mm × 20mm",
    delivery: "デザイン確定後 10〜18日",
    image: "/images/products/crystal-block-mockup.png",
    visual: "crystal",
    summary: "透明感と重厚感を兼ね備えた、節目の贈り物にふさわしいプレミアム記念品です。",
    features: ["飾る場所を選ばない上品な透明感", "名前・日付・メッセージ刻印に対応", "法人表彰や周年記念にも対応"],
    uses: ["敬老の日", "還暦祝い", "結婚記念日", "法人表彰"],
    caseText: "三世代の家族写真を使用し、祖父母の金婚式祝いとして制作。リビングに長く飾れる記念品になりました。"
  },
  {
    slug: "glass-clock",
    name: "ガラス時計",
    tier: "Premium",
    price: "12,800円〜",
    size: "約180mm × 150mm",
    delivery: "デザイン確定後 12〜20日",
    image: "/images/products/glass-clock-mockup.png",
    visual: "glass",
    summary: "時を刻む時計に家族の記憶を重ねる、実用性と記念性を両立した上位ギフトです。",
    features: ["リビングや応接室になじむ上品な佇まい", "写真・記念日・名前入れに対応", "退職祝い・法人記念品にも人気"],
    uses: ["敬老の日", "退職祝い", "新築祝い", "法人記念品"],
    caseText: "退職祝いとして、ご家族の写真と感謝の言葉を入れたガラス時計を制作。職場からの贈り物として選ばれました。"
  },
  {
    slug: "glass-photo-frame",
    name: "ガラスフォトフレーム",
    tier: "Premium",
    price: "6,800円〜",
    size: "L判写真対応 / 約190mm × 145mm",
    delivery: "デザイン確定後 10〜18日",
    image: "/images/products/glass-photo-frame-mockup.png",
    visual: "glass",
    summary: "写真を主役にしながら、百貨店ギフトのような品格を添えるガラス製フォトフレームです。",
    features: ["写真が映える透明感のある素材", "命名・記念日・短文メッセージに対応", "ギフト包装前提の見せ方"],
    uses: ["出産祝い", "結婚記念日", "母の日", "敬老の日"],
    caseText: "赤ちゃんの写真と命名情報を添え、出産祝いとして制作。両家の祖父母にも共有しやすい記念品になりました。"
  },
  {
    slug: "wooden-coaster",
    name: "木製コースター",
    tier: "Entry",
    price: "680円〜",
    size: "約90mm × 90mm",
    delivery: "デザイン確定後 7〜14日",
    visual: "coaster",
    summary: "温かみのある木目に名前やロゴを添えられる、配布用にも上品な小型ギフトです。",
    features: ["木目を生かした自然な仕上がり", "複数名への配布に向く価格帯", "園名・年度・ロゴ入れに対応"],
    uses: ["卒園卒業記念", "法人ノベルティ", "新築祝い", "プチギフト"],
    caseText: "卒園記念として園名と年度を入れ、保護者配布用に制作。価格を抑えつつ記念性を保てる品として選ばれました。"
  },
  {
    slug: "rubber-coaster",
    name: "ラバーコースター",
    tier: "Entry",
    price: "480円〜",
    size: "約90mm × 90mm",
    delivery: "デザイン確定後 7〜14日",
    visual: "coaster",
    summary: "写真やロゴを鮮やかに表現しやすい、イベント配布や法人ノベルティ向けの実用ギフトです。",
    features: ["写真・ロゴの再現性に優れる", "大量注文に向く仕様", "水まわりでも使いやすい素材"],
    uses: ["法人ノベルティ", "卒園卒業記念", "周年記念", "イベント配布"],
    caseText: "周年イベントの来場記念品としてロゴ入りで制作。安価に見えない配色と包装でブランド感を整えました。"
  },
  {
    slug: "photo-panel",
    name: "フォトパネル",
    tier: "Standard",
    price: "5,980円〜",
    size: "A5 / A4相当から選択",
    delivery: "デザイン確定後 8〜16日",
    visual: "panel",
    summary: "家族写真や成長記録をインテリアとして飾りやすく整える、人気の定番ギフトです。",
    features: ["複数写真のレイアウトに対応", "軽量で飾りやすい", "子どもの成長記録に向く"],
    uses: ["出産祝い", "誕生日", "卒園卒業記念", "家族記念日"],
    caseText: "1歳までの成長写真をまとめ、祖父母へのプレゼントとして制作。写真を選ぶ時間も家族の思い出になりました。"
  },
  {
    slug: "tumbler",
    name: "タンブラー",
    tier: "Standard",
    price: "2,980円〜",
    size: "約350ml",
    delivery: "デザイン確定後 7〜14日",
    image: "/images/products/tumbler-mockup.png",
    visual: "drinkware",
    summary: "毎日使える実用性に、名前や家族の記憶を添える大人向けのパーソナルギフトです。",
    features: ["日常使いしやすい容量", "名前・短文メッセージに対応", "ペアギフトや法人ギフトにも対応"],
    uses: ["父の日", "退職祝い", "法人記念品", "誕生日"],
    caseText: "父の日に、お子さまの名前と感謝の一言を入れて制作。仕事場でも使いやすい落ち着いた仕上がりにしました。"
  },
  {
    slug: "keiro-gift-set",
    name: "敬老の日ギフトセット",
    tier: "Gift Set",
    price: "9,800円〜",
    size: "商品組み合わせにより変動",
    delivery: "デザイン確定後 12〜20日",
    visual: "crystal",
    summary: "お孫さまの写真を中心に、飾るギフトと使えるギフトを組み合わせた敬老の日専用セットです。",
    features: ["祖父母向けの文面提案付き", "写真選びの相談に対応", "複数世帯への配送相談可"],
    uses: ["敬老の日", "還暦祝い", "古希祝い", "家族記念日"],
    caseText: "クリスタルブロックとマグカップを組み合わせ、祖父母それぞれへ贈るセットとして制作しました。"
  },
  {
    slug: "baby-gift-set",
    name: "出産祝いセット",
    tier: "Gift Set",
    price: "8,800円〜",
    size: "商品組み合わせにより変動",
    delivery: "デザイン確定後 12〜20日",
    visual: "glass",
    summary: "命名記念、誕生日、はじめての写真を美しく残す、出産祝い向けの上質なセットです。",
    features: ["命名情報のレイアウト相談に対応", "両家祖父母への贈答にも対応", "写真補正と文面調整を含む"],
    uses: ["出産祝い", "命名記念", "内祝い", "ベビーギフト"],
    caseText: "ガラスフォトフレームとフォトパネルを組み合わせ、出産祝いと内祝いを兼ねた記念品として制作しました。"
  },
  {
    slug: "anniversary-gift",
    name: "結婚記念品",
    tier: "Gift Set",
    price: "12,800円〜",
    size: "商品組み合わせにより変動",
    delivery: "デザイン確定後 12〜20日",
    visual: "glass",
    summary: "夫婦の歩みと家族の時間を、節目にふさわしい上質な記念品として形にします。",
    features: ["記念年数や日付入れに対応", "夫婦・家族写真の構成提案", "両親への結婚記念日ギフトにも人気"],
    uses: ["結婚記念日", "金婚式", "銀婚式", "両親への贈り物"],
    caseText: "ご両親の結婚40周年に、家族写真と子どもたちからのメッセージを添えて制作しました。"
  }
];

export type ProductDetail = {
  merit: string;
  emotional: string;
  giftDemand: string;
  target: string;
  sceneLead: string;
  purchasePoints: string[];
  sceneExamples: string[];
  voice: string;
  faqs: [string, string][];
};

const detailBase = (product: Product): ProductDetail => ({
  merit: `${product.name}は、写真をただ印刷するのではなく、贈る相手の暮らしに自然になじむ記念品として設計しています。価格だけで選ばれる量販品ではなく、素材感、余白、文字量、写真の見え方まで整えることで、受け取った瞬間に「きちんと選んでくれた」と伝わるギフトになります。`,
  emotional: `大切なのは、ものそのものよりも、そこに込められた時間です。${product.name}は、家族の笑顔や人生の節目を、毎日見返せる形に変えるための一品です。`,
  giftDemand: `${product.uses.join("、")}など、想いを丁寧に届けたい場面で選ばれています。`,
  target: "家族への贈り物をきちんと選びたい方、祖父母やご両親へ記念性のあるギフトを贈りたい方、法人の記念品を上品に整えたい方におすすめです。",
  sceneLead: `${product.name}は、${product.uses.join("、")}に向いています。贈る相手の年齢や飾る場所、使う頻度に合わせて、写真の構成や文面をご提案します。`,
  purchasePoints: product.features,
  sceneExamples: product.uses,
  voice: "写真の見せ方まで相談できたので、想像よりも落ち着いた高級感のある仕上がりでした。家族にも安心して贈れました。",
  faqs: [
    ["写真はスマートフォンの写真でも使えますか？", "可能です。明るさや解像度を確認し、仕上がりに向く写真を一緒に選びます。"],
    ["メッセージや名前は入れられますか？", "はい。商品に合わせて、名前・日付・短いメッセージを上品に配置できます。"],
    ["急ぎの相談はできますか？", "可能な範囲で調整します。記念日が近い場合は、LINE公式から早めにご相談ください。"]
  ]
});

export const productDetails: Record<string, ProductDetail> = Object.fromEntries(
  products.map((product) => [product.slug, detailBase(product)])
) as Record<string, ProductDetail>;

productDetails["crystal-block"] = {
  ...detailBase(products.find((p) => p.slug === "crystal-block")!),
  target: "祖父母、ご両親、表彰対象者、節目の記念を長く飾ってほしい相手におすすめです。",
  voice: "ずっしりとした重みがあり、家族写真が特別な記念品になりました。リビングに飾っても上品です。"
};

productDetails["glass-clock"] = {
  ...detailBase(products.find((p) => p.slug === "glass-clock")!),
  target: "退職祝い、新築祝い、法人記念品など、実用性と格式の両方を求める方におすすめです。",
  voice: "時計として使えるので飾りっぱなしにならず、毎日目に入る記念品になりました。"
};

productDetails["glass-photo-frame"] = {
  ...detailBase(products.find((p) => p.slug === "glass-photo-frame")!),
  target: "出産祝い、命名記念、結婚記念日など、写真を主役にしたい贈り物におすすめです。",
  voice: "赤ちゃんの写真が上品に見えて、両親にも祖父母にも贈りやすい仕上がりでした。"
};

export const giftScenes = [
  {
    slug: "baby-gift",
    title: "出産祝い",
    keywords: "出産祝い ベビーギフト 命名記念",
    description: "赤ちゃんの誕生を、命名記念や家族写真とともに上品に残すギフト提案です。",
    recommended: ["baby-gift-set", "glass-photo-frame", "photo-panel"],
    voice: "命名情報まで美しく入って、出産祝いとして特別感がありました。"
  },
  {
    slug: "keiro",
    title: "敬老の日",
    keywords: "敬老の日 孫の写真 プレゼント",
    description: "お孫さまの写真や家族のメッセージを、祖父母の暮らしに残る贈り物へ整えます。",
    recommended: ["keiro-gift-set", "glass-clock", "crystal-block"],
    voice: "孫の写真が上品に残り、毎日眺めていると喜んでもらえました。"
  },
  {
    slug: "anniversary",
    title: "結婚記念日",
    keywords: "結婚記念日 夫婦記念 家族の思い出",
    description: "夫婦の歩みと家族の時間を、節目にふさわしい記念品として形にします。",
    recommended: ["anniversary-gift", "glass-clock", "crystal-block"],
    voice: "派手すぎず、でも特別感があり、両親の記念日にぴったりでした。"
  },
  {
    slug: "retirement",
    title: "退職祝い",
    keywords: "退職祝い 記念品 写真入りギフト",
    description: "感謝と労いの気持ちを、職場にも自宅にも飾りやすい記念品として届けます。",
    recommended: ["glass-clock", "crystal-block", "tumbler"],
    voice: "職場一同からの贈り物として、きちんと感があり安心して渡せました。"
  },
  {
    slug: "housewarming",
    title: "新築祝い",
    keywords: "新築祝い 家族写真 ギフト",
    description: "新しい暮らしに自然になじむ、上品な写真入りギフトを提案します。",
    recommended: ["glass-clock", "glass-photo-frame", "photo-panel"],
    voice: "新居の雰囲気を壊さず、家族の記念として飾れる点が良かったです。"
  },
  {
    slug: "sixtieth",
    title: "還暦祝い",
    keywords: "還暦祝い 家族ギフト 写真入り記念品",
    description: "人生の大きな節目を、家族の写真と感謝の言葉で品よく残します。",
    recommended: ["crystal-block", "glass-clock", "keiro-gift-set"],
    voice: "赤いものにこだわりすぎず、長く飾れる記念品として喜ばれました。"
  },
  {
    slug: "corporate",
    title: "法人記念品",
    keywords: "法人記念品 卒園記念 周年記念 表彰品 ノベルティ",
    description: "周年記念、表彰品、卒園記念、ノベルティまで、安価に見えない記念品を整えます。",
    recommended: ["crystal-block", "glass-clock", "wooden-coaster"],
    voice: "配布品ではなく、会社の姿勢が伝わる記念品として好評でした。"
  },
  {
    slug: "graduation",
    title: "卒園卒業記念品",
    keywords: "卒園記念品 卒業記念 写真入り記念品",
    description: "園や学校で過ごした時間を、先生・保護者・子どもたちの記念に残します。",
    recommended: ["photo-panel", "wooden-coaster", "rubber-coaster"],
    voice: "保護者会で配りやすく、写真もきれいに残せて満足でした。"
  }
];

export const workCategories = ["出産祝い", "敬老の日", "結婚記念日", "卒園記念", "法人記念品"];

export const works = [
  { category: "出産祝い", title: "命名記念のガラスフォトフレーム", product: "ガラスフォトフレーム" },
  { category: "敬老の日", title: "孫の写真を飾るクリスタルブロック", product: "クリスタルブロック" },
  { category: "結婚記念日", title: "夫婦の歩みを刻むガラス時計", product: "ガラス時計" },
  { category: "卒園記念", title: "集合写真を使ったフォトパネル", product: "フォトパネル" },
  { category: "法人記念品", title: "周年記念ロゴ入りクリスタルブロック", product: "クリスタルブロック" }
];

export const faqItems: [string, string][] = [
  ["納期はどのくらいですか？", "通常はデザイン確定後7〜20日が目安です。商品や数量により変動します。"],
  ["写真はスマートフォン撮影でも大丈夫ですか？", "可能です。明るさや解像度を確認し、最適な写真を一緒に選びます。"],
  ["修正はできますか？", "初回提案後、軽微な修正に対応します。大幅変更は内容によりご相談となります。"],
  ["送料はかかりますか？", "配送先や数量により異なります。ご注文前にご案内します。"],
  ["支払い方法は？", "銀行振込またはオンライン決済を想定しています。正式注文時にご案内します。"],
  ["返品はできますか？", "名入れ商品のため、お客様都合の返品はお受けできません。不良や破損は対応します。"],
  ["法人注文はできますか？", "可能です。数量、納期、ロゴ入れ、個別名入れの有無をお知らせください。"],
  ["LINEで相談できますか？", "はい。写真を送りながら相談したい場合はLINE公式が便利です。"]
];

export type SceneArticle = {
  why: string[];
  howToChoose: string[];
  avoidMistakes: string[];
  faqs: [string, string][];
};

export const sceneArticles: Record<string, SceneArticle> = Object.fromEntries(
  giftScenes.map((scene) => [
    scene.slug,
    {
      why: [
        `${scene.title}で喜ばれるギフトは、単に実用品であることよりも、贈る相手との関係やその日までの時間が伝わることが大切です。写真入りのオーダーメイドギフトは、家族の笑顔、名前、記念日、短いメッセージを一つにまとめられるため、既製品では伝わりにくい気持ちを自然に届けられます。`,
        `Memories Labでは、写真を大きく入れるだけではなく、余白、文字量、素材感、飾る場所まで考えてデザインします。高級ホテルや百貨店ギフト売場のような落ち着いた印象を大切にし、安価なオーダーグッズに見えない仕上がりを目指します。`
      ],
      howToChoose: [
        `まずは、相手が「飾るもの」を喜ぶか、「使えるもの」を喜ぶかを考えると選びやすくなります。特別感を重視するならクリスタルやガラス、日常で使ってほしいならマグカップやタンブラー、複数人へ配るならコースターやフォトパネルが向いています。`,
        `写真は、表情がはっきりしているもの、背景が明るいもの、贈る相手とのつながりが伝わるものを選ぶと仕上がりが良くなります。文字は短く整えるほど上品に見えます。`
      ],
      avoidMistakes: [
        "写真や文字を詰め込みすぎると、記念品ではなく販促品のように見えてしまうことがあります。主役の写真を決め、名前や日付は控えめに添えるのがおすすめです。",
        "納期が近い場合は、写真選びと文面確認に時間がかかるため、早めの相談が安心です。LINE公式なら写真を送りながら確認できます。"
      ],
      faqs: [
        ["おすすめ商品はどれですか？", `迷った場合は、${scene.recommended.map((slug) => products.find((p) => p.slug === slug)?.name).filter(Boolean).join("、")}がおすすめです。`],
        ["写真が1枚しかなくても作れますか？", "はい。1枚の写真でも、余白と文字の配置を整えることで上品な仕上がりにできます。"],
        ["相手へ直接送れますか？", "可能です。配送先や贈り主表記について事前に確認します。"]
      ]
    }
  ])
) as Record<string, SceneArticle>;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getScene(slug: string) {
  return giftScenes.find((scene) => scene.slug === slug);
}
