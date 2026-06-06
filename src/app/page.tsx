import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  Bot,
  Brain,
  ClipboardCheck,
  Clock3,
  FileText,
  Grid2X2,
  Heart,
  Home,
  Library,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

const features = [
  { title: "مسیر شخصی", text: "متناسب با شما", icon: Target, tone: "violet" },
  { title: "محتوای علمی", text: "معتبر و کاربردی", icon: BookOpen, tone: "blue" },
  { title: "همراه هوش مصنوعی", text: "مشاوره هوشمند", icon: Bot, tone: "purple" },
  { title: "گزارش پیشرفت", text: "تحلیل مسیر", icon: TrendingUp, tone: "pink" },
];

const floating = [
  { title: "خودشناسی", text: "آگاهی از نقاط قوت و ضعف", icon: User, className: "float-one" },
  { title: "زندگی هوشمند", text: "ساختن رابطه‌ای پایدار", icon: Users, className: "float-three" },
  { title: "تعهدرفتن", text: "تصمیم عاقلانه و امن", icon: Home, className: "float-four" },
];

const topics = [
  {
    title: "چطور بفهمم فرد مناسبی رو انتخاب کردم؟",
    meta: "۲۳ دقیقه پیش",
    tag: "انتخاب همسر",
    avatar: "م",
    color: "purple",
  },
  {
    title: "تعارض با خانواده همسر؛ چطور مدیریت کنم؟",
    meta: "۱ ساعت پیش",
    tag: "روابط خانوادگی",
    avatar: "س",
    color: "pink",
  },
  {
    title: "ترس از متعهد شدن، چکار کنم؟",
    meta: "۲ ساعت پیش",
    tag: "ترس و اضطراب",
    avatar: "ع",
    color: "blue",
  },
];

const articles = [
  {
    title: "۷ نشانه که نشان می‌دهد هنوز برای ازدواج آماده نیستید",
    cat: "خودشناسی",
    color: "#7438ff",
    image: "linear-gradient(135deg, rgba(45,49,92,.12), rgba(255,164,118,.12)), url('/self-awareness-article.webp')",
    position: "center",
  },
  {
    title: "چگونه یک رابطه سالم و پایدار بسازیم؟",
    cat: "روابط عاطفی",
    color: "#ff4aa2",
    image: "linear-gradient(135deg, rgba(124,60,255,.08), rgba(255,159,42,.1)), url('/emotional-relationship-article.webp')",
    position: "center",
  },
  {
    title: "۱۲ معیار مهم در انتخاب همسر که کمتر به آن توجه می‌شود",
    cat: "انتخاب همسر",
    color: "#20b978",
    image: "linear-gradient(135deg, rgba(32,185,120,.1), rgba(124,60,255,.08)), url('/spouse-selection-article.webp')",
    position: "center",
  },
  {
    title: "۳ تکنیک طلایی برای گفت‌وگوی موثر در رابطه",
    cat: "مهارت‌ها",
    color: "#2f80ff",
    image: "linear-gradient(135deg, rgba(47,128,255,.08), rgba(255,74,162,.08)), url('/communication-skills-article.webp')",
    position: "center",
  },
];

const smartTests = [
  {
    title: "آزمون آمادگی ازدواج",
    text: "شناخت میزان آمادگی ذهنی، عاطفی و مسئولیت‌پذیری پیش از تصمیم جدی.",
    meta: "۲۴ سوال",
    time: "۱۰ دقیقه",
    icon: Heart,
    tone: "pink",
    progress: 78,
  },
  {
    title: "آزمون سبک دلبستگی",
    text: "تحلیل الگوهای صمیمیت، امنیت، فاصله و واکنش شما در رابطه.",
    meta: "۳۲ سوال",
    time: "۱۲ دقیقه",
    icon: ShieldCheck,
    tone: "green",
    progress: 64,
  },
  {
    title: "آزمون معیارهای انتخاب همسر",
    text: "اولویت‌های واقعی شما را از خواسته‌های لحظه‌ای جدا می‌کند.",
    meta: "۱۸ سوال",
    time: "۷ دقیقه",
    icon: Target,
    tone: "violet",
    progress: 86,
  },
  {
    title: "آزمون مهارت گفت‌وگو",
    text: "نقاط قوت و چالش‌های شما در تعارض، شنیدن و بیان نیازها.",
    meta: "۲۰ سوال",
    time: "۸ دقیقه",
    icon: MessageCircle,
    tone: "blue",
    progress: 71,
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <nav className="nav shell" aria-label="ناوبری اصلی">
          <a className="logo" href="#">
            <span>حامین‌یار</span>
            <Image
              className="logo-mark"
              src="/hamin-yar-logo.webp"
              alt=""
              width={150}
              height={150}
              aria-hidden="true"
            />
          </a>
          <div className="menu">
            <a href="#journey">
              <Sparkles size={18} />
              مسیر هوشمند
            </a>
            <a href="#articles">
              <FileText size={18} />
              مقالات
            </a>
            <a className="active" href="#forum">
              <MessageCircle size={18} />
              تالار گفتگو
            </a>
            <a href="#tests">
              <Library size={18} />
              آزمون‌ها
            </a>
            <a href="#about">
              <FileText size={18} />
              درباره ما
            </a>
          </div>
          <div className="actions">
            <button className="icon-btn" aria-label="جست‌وجو">
              <Search size={21} />
            </button>
            <button className="login">
              <User size={18} />
              ورود / ثبت‌نام
            </button>
          </div>
        </nav>
      </header>

      <section className="hero shell" id="journey">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={18} />
            سامانه هوشمند ازدواج و خودشناسی
          </div>
          <h1>
            همراه هوشمند شما
            <br />
            در مسیر{" "}
            <span className="love-word">
              ازدواج
              <span className="spark" />
              <span className="underline" />
            </span>
          </h1>
          <p>
            ما با ابزارهای علمی و هوش مصنوعی، به شما کمک می‌کنیم خودتان را بهتر
            بشناسید، معیارهای آگاهانه داشته باشید و یک رابطه موفق بنا کنید.
          </p>
        </div>

        <div className="hero-art">
          <div className="orbit" />
          <div className="arch">
            <Image
              src="/hero-path.png"
              alt="مسیر تصویری ازدواج و خودشناسی"
              width={1484}
              height={1060}
              priority
            />
          </div>
          {floating.map((item) => {
            const Icon = item.icon;
            return (
              <div className={`float-card ${item.className}`} key={item.title}>
                <i>
                  <Icon size={23} />
                </i>
                <span>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </span>
              </div>
            );
          })}
        </div>

        <div className="hero-actions">
          <div className="feature-grid">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <article className={`feature-card ${item.tone}`} key={item.title}>
                  <i>
                    <Icon size={25} />
                  </i>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </article>
              );
            })}
          </div>
          <div className="cta-wrap">
            <a className="cta" href="#forum">
              <span>
                <ArrowLeft size={22} />
              </span>
              شروع مسیر من
            </a>
          </div>
        </div>
      </section>

      <section className="forum section-card shell" id="forum">
        <div className="topics">
          <div className="tabs">
            <button className="all-cat">
              <Grid2X2 size={16} />
              همه دسته‌ها
            </button>
            <div className="tab-group">
              <span className="tab active">جدیدترین</span>
              <span className="tab">پرطرفدار</span>
              <span className="tab">بدون پاسخ</span>
            </div>
          </div>
          {topics.map((topic) => (
            <article className="topic" key={topic.title}>
              <div className={`avatar ${topic.color}`}>{topic.avatar}</div>
              <div>
                <h3>{topic.title}</h3>
                <div className="meta">
                  <span>{topic.meta}</span>
                  <span>۱۸ پاسخ</span>
                </div>
              </div>
              <span className={`tag ${topic.color}`}>{topic.tag}</span>
            </article>
          ))}
          <a className="view-all" href="#forum">
            <ArrowLeft size={17} />
            مشاهده همه گفتگوها
          </a>
        </div>

        <div className="forum-panel">
          <div className="chat-art" aria-hidden="true">
            <Image
              src="/chat-plant.png"
              alt=""
              width={1536}
              height={1024}
            />
          </div>
          <p className="sec-sub">جایی امن برای پرسش، گفتگو و تبادل تجربه</p>
          <div className="pill-row">
            <span className="pill">
              <BookOpen size={16} />
              گفتگوی صمیمی
            </span>
            <span className="pill">
              <Brain size={16} />
              پرسش‌شناسی
            </span>
            <span className="pill">
              <LockKeyhole size={16} />
              تجربه‌های واقعی
            </span>
          </div>
          <a className="forum-btn" href="#forum">
            ورود به تالار گفتگو
            <ArrowLeft size={18} />
          </a>
        </div>
      </section>

      <section className="tests section-card shell" id="tests">
        <div className="section-head tests-head">
          <div>
            <h2>آزمون‌های هوشمند</h2>
            <p>تحلیل علمی و شخصی‌سازی‌شده برای شناخت دقیق‌تر مسیر رابطه</p>
          </div>
          <a className="forum-link" href="#tests">
            <ArrowLeft size={17} />
            مشاهده همه آزمون‌ها
          </a>
        </div>

        <div className="test-hero">
          <div className="test-orb">
            <ClipboardCheck size={42} />
          </div>
          <div>
            <span className="test-kicker">
              <Sparkles size={17} />
              تحلیل فوری با هوش مصنوعی
            </span>
            <h3>از پاسخ‌های شما، نقشه رشد رابطه ساخته می‌شود</h3>
            <p>
              هر آزمون با گزارش قابل فهم، پیشنهاد تمرین و مسیر پیشنهادی ادامه پیدا
              می‌کند تا فقط یک نمره نبینید، بلکه قدم بعدی را هم بدانید.
            </p>
          </div>
          <a className="test-start" href="#tests">
            شروع آزمون
            <ArrowLeft size={18} />
          </a>
        </div>

        <div className="test-grid">
          {smartTests.map((test) => {
            const Icon = test.icon;
            return (
              <article className={`test-card ${test.tone}`} key={test.title}>
                <div className="test-icon">
                  <Icon size={30} />
                </div>
                <h3>{test.title}</h3>
                <p>{test.text}</p>
                <div className="test-meta">
                  <span>
                    <ClipboardCheck size={15} />
                    {test.meta}
                  </span>
                  <span>
                    <Clock3 size={15} />
                    {test.time}
                  </span>
                </div>
                <div className="test-progress" aria-hidden="true">
                  <span style={{ width: `${test.progress}%` }} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="articles section-card shell" id="articles">
        <div className="section-head">
          <div>
            <h2>مقالات منتخب</h2>
            <p>مطالب کاربردی برای رشد و انتخاب بهتر</p>
          </div>
          <a className="forum-link" href="#articles">
            <ArrowLeft size={17} />
            مشاهده همه مقالات
          </a>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <article className="article" key={article.title}>
              <div
                className="cover"
                style={{
                  backgroundImage: article.image,
                  backgroundPosition: article.position ?? "center",
                }}
              >
                <span className="cat" style={{ backgroundColor: article.color }}>
                  {article.cat}
                </span>
              </div>
              <div className="article-body">
                <h3>{article.title}</h3>
                <div className="read">۵ دقیقه مطالعه</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
