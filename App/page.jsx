
const groups = [
  {
    title: "Page structure",
    description: "Elements that define webpage structure.",
    items: [
      ["header", "Page or section header.", "<header>Website Header</header>"],
      ["nav", "Navigation links.", '<nav><a href="/">Home</a></nav>'],
      ["main", "Primary page content.", "<main>Main content</main>"],
      ["section", "Groups related content.", "<section><h2>Features</h2></section>"],
      ["article", "Independent content like a blog post.", "<article><h2>Blog post</h2></article>"],
      ["aside", "Supplementary or sidebar content.", "<aside>Related content</aside>"],
      ["footer", "Page or section footer.", "<footer>Copyright 2026</footer>"],
      ["div", "Generic block container.", "<div>Container</div>"],
      ["span", "Generic inline container.", "<span>Inline content</span>"],
    ],
  },
  {
    title: "Text and typography",
    description: "Elements for headings, text and formatting.",
    items: [
      ["h1", "Main page heading.", "<h1>Main heading</h1>"],
      ["h2", "Section heading.", "<h2>Section heading</h2>"],
      ["h3-h6", "Lower-level headings.", "<h3>Subheading</h3>"],
      ["p", "Paragraph.", "<p>This is a paragraph.</p>"],
      ["strong", "Important text.", "<strong>Important</strong>"],
      ["b", "Stylistically bold text.", "<b>Bold</b>"],
      ["em", "Emphasized text.", "<em>Emphasis</em>"],
      ["i", "Alternate voice or mood.", "<i>Technical term</i>"],
      ["small", "Fine print.", "<small>Terms apply</small>"],
      ["mark", "Highlighted text.", "<mark>Highlighted</mark>"],
      ["del", "Deleted content.", "<del>Old price</del>"],
      ["ins", "Inserted content.", "<ins>New content</ins>"],
      ["s", "No longer accurate content.", "<s>Old information</s>"],
      ["u", "Annotated text.", "<u>Annotated</u>"],
      ["sub", "Subscript.", "H<sub>2</sub>O"],
      ["sup", "Superscript.", "x<sup>2</sup>"],
      ["br", "Line break.", "First line<br />Second line"],
      ["hr", "Thematic divider.", "Before<hr />After"],
      ["blockquote", "Block quotation.", "<blockquote>A quotation.</blockquote>"],
      ["q", "Inline quotation.", "<q>Short quote</q>"],
      ["code", "Inline code.", "<code>console.log()</code>"],
      ["pre", "Preserves whitespace.", "<pre>Line one\nLine two</pre>"],
      ["abbr", "Abbreviation.", '<abbr title="HyperText Markup Language">HTML</abbr>'],
      ["time", "Date or time.", "<time>November 1</time>"],
      ["address", "Contact information.", "<address>Contact us</address>"],
    ],
  },
  {
    title: "Links and media",
    description: "Navigation, images, video, audio and graphics.",
    items: [
      ["a", "Hyperlink.", '<a href="/about">About</a>'],
      ["img", "Displays an image.", '<img src="/logo.png" alt="Logo" />'],
      ["picture", "Alternative image sources.", "<picture>...</picture>"],
      ["source", "Media source.", '<source src="/video.mp4" type="video/mp4" />'],
      ["video", "Video player.", '<video controls src="/video.mp4" />'],
      ["audio", "Audio player.", '<audio controls src="/audio.mp3" />'],
      ["track", "Subtitles and captions.", '<track src="/captions.vtt" kind="subtitles" />'],
      ["iframe", "Embeds another webpage.", '<iframe title="Example" src="https://example.com" />'],
      ["figure", "Groups standalone media.", "<figure>...</figure>"],
      ["figcaption", "Media caption.", "<figcaption>Image caption</figcaption>"],
      ["canvas", "JavaScript drawing surface.", '<canvas width="300" height="150" />'],
      ["svg", "Vector graphics.", '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg>'],
    ],
  },
  {
    title: "Lists",
    description: "Organizing collections of information.",
    items: [
      ["ul", "Unordered bullet list.", "<ul><li>Apple</li><li>Orange</li></ul>"],
      ["ol", "Ordered numbered list.", "<ol><li>First</li><li>Second</li></ol>"],
      ["li", "List item.", "<li>Item</li>"],
      ["dl", "Description list.", "<dl><dt>React</dt><dd>UI library</dd></dl>"],
      ["dt", "Description term.", "<dt>React</dt>"],
      ["dd", "Term description.", "<dd>UI library</dd>"],
    ],
  },
  {
    title: "Forms and inputs",
    description: "Collecting user information and interaction.",
    items: [
      ["form", "Form submission container.", "<form>...</form>"],
      ["label", "Input description.", '<label htmlFor="email">Email</label>'],
      ["input", "Single-line input.", '<input type="text" placeholder="Name" />'],
      ["textarea", "Multiline text input.", "<textarea placeholder='Message' />"],
      ["button", "Clickable action.", '<button type="button">Click</button>'],
      ["select", "Dropdown selection.", "<select><option>React</option></select>"],
      ["option", "Dropdown choice.", "<option>React</option>"],
      ["optgroup", "Groups dropdown choices.", '<optgroup label="Languages">...</optgroup>'],
      ["fieldset", "Groups form controls.", "<fieldset>...</fieldset>"],
      ["legend", "Fieldset title.", "<legend>Account</legend>"],
      ["datalist", "Input suggestions.", '<datalist id="languages"><option value="JavaScript" /></datalist>'],
      ["output", "Displays calculated results.", "<output>42</output>"],
      ["progress", "Task completion indicator.", '<progress value="60" max="100" />'],
      ["meter", "Measurement within a range.", '<meter value="0.7" min="0" max="1" />'],
    ],
  },
  {
    title: "Tables",
    description: "Structured data in rows and columns.",
    items: [
      ["table", "Creates a table.", "<table>...</table>"],
      ["caption", "Table title.", "<caption>Team members</caption>"],
      ["thead", "Header rows.", "<thead>...</thead>"],
      ["tbody", "Main data rows.", "<tbody>...</tbody>"],
      ["tfoot", "Summary rows.", "<tfoot>...</tfoot>"],
      ["tr", "Table row.", "<tr>...</tr>"],
      ["th", "Header cell.", "<th>Name</th>"],
      ["td", "Data cell.", "<td>Fahad</td>"],
      ["colgroup", "Groups table columns.", "<colgroup>...</colgroup>"],
      ["col", "Column properties.", "<col />"],
    ],
  },
  {
    title: "Interactive and special",
    description: "Native browser functionality and document elements.",
    items: [
      ["details", "Expandable content.", "<details><summary>More</summary><p>Details</p></details>"],
      ["summary", "Expandable content heading.", "<summary>More information</summary>"],
      ["dialog", "Native modal dialog.", "<dialog open>Dialog content</dialog>"],
      ["template", "Non-rendered HTML template.", "<template><p>Reusable markup</p></template>"],
      ["noscript", "Fallback without JavaScript.", "<noscript>Enable JavaScript</noscript>"],
      ["script", "Loads or embeds JavaScript.", '<script src="/app.js"></script>'],
      ["style", "Embeds CSS.", "<style>p { color: red; }</style>"],
      ["link", "Links external resources.", '<link rel="stylesheet" href="/style.css" />'],
      ["meta", "Document metadata.", '<meta name="description" content="Website" />'],
      ["title", "Browser tab title.", "<title>My Website</title>"],
      ["base", "Base URL for relative links.", '<base href="https://example.com/" />'],
    ],
  },
];

const inputTypes = [
  ["text", "General text"],
  ["email", "Email address"],
  ["password", "Hidden password"],
  ["number", "Numeric value"],
  ["tel", "Phone number"],
  ["url", "Website URL"],
  ["search", "Search field"],
  ["checkbox", "Independent selection"],
  ["radio", "Single group selection"],
  ["file", "File upload"],
  ["date", "Date picker"],
  ["time", "Time picker"],
  ["datetime-local", "Local date and time"],
  ["color", "Color picker"],
  ["range", "Slider"],
  ["submit", "Submit form"],
  ["reset", "Reset form"],
  ["hidden", "Hidden value"],
];

const attributes = [
  ["id", "Unique element identifier.", 'id="profile"'],
  ["className", "CSS classes in JSX.", 'className="card"'],
  ["title", "Additional information or tooltip.", 'title="More info"'],
  ["href", "Link destination.", 'href="/about"'],
  ["target", "Where a link opens.", 'target="_blank"'],
  ["rel", "Relationship to linked resource.", 'rel="noopener noreferrer"'],
  ["src", "Media or script URL.", 'src="/logo.png"'],
  ["alt", "Image alternative text.", 'alt="Company logo"'],
  ["width / height", "Element dimensions.", "width={200} height={100}"],
  ["type", "Input or button type.", 'type="email"'],
  ["name", "Form submission field name.", 'name="email"'],
  ["value", "Input or option value.", 'value="hello@example.com"'],
  ["placeholder", "Empty-input hint.", 'placeholder="Enter email"'],
  ["required", "Makes a field mandatory.", "required"],
  ["disabled", "Disables interaction.", "disabled"],
  ["checked", "Checkbox or radio state.", "checked={true}"],
  ["readOnly", "Prevents editing.", "readOnly"],
  ["autoFocus", "Requests initial focus.", "autoFocus"],
  ["maxLength", "Maximum text length.", "maxLength={100}"],
  ["min / max", "Minimum and maximum values.", "min={1} max={100}"],
  ["onClick", "Click event handler.", "onClick={handleClick}"],
  ["onChange", "Change event handler.", "onChange={handleChange}"],
  ["onSubmit", "Form submission handler.", "onSubmit={handleSubmit}"],
];

const jsxRules = [
  ["className", "Use className instead of HTML class.", '<div className="card">Hello</div>'],
  ["htmlFor", "Use htmlFor instead of HTML for.", '<label htmlFor="name">Name</label>'],
  ["Self-closing", "Close every JSX element.", '<img src="/logo.png" alt="Logo" />'],
  ["One root", "Use one parent or a Fragment.", "<><h1>Hello</h1><p>World</p></>"],
  ["Expressions", "Curly braces insert JavaScript expressions.", "<h1>Hello, {username}</h1>"],
  ["Inline styles", "style takes a JavaScript object.", '<div style={{ backgroundColor: "black" }}>Hello</div>'],
  ["Events", "Use camelCase event properties.", "<button onClick={handleClick}>Click</button>"],
  ["Comments", "Use JSX comment syntax.", "{/* JSX comment */}"],
  ["Keys", "Give mapped elements stable keys.", "{items.map(item => <li key={item.id}>{item.name}</li>)}"],
  ["Boolean props", "Set boolean attributes with expressions.", "<button disabled={true}>Save</button>"],
  ["Spread props", "Spread an object of props.", "<input {...inputProps} />"],
];

function Code({ children }) {
  return (
    <pre className="overflow-x-auto rounded-xl bg-[#101319] p-4 text-sm leading-7 text-emerald-200">
      <code>{children}</code>
    </pre>
  );
}

function Section({ title, description, items }) {
  return (
    <section id={title.toLowerCase().replaceAll(" ", "-")} className="scroll-mt-24 space-y-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="mt-2 text-sm text-zinc-500">{description}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map(([tag, purpose, example]) => (
          <article key={tag} className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-2 flex items-center justify-between gap-2">
              <code className="font-semibold text-indigo-600 dark:text-indigo-400">
                &lt;{tag}&gt;
              </code>
              <span className="text-xs text-zinc-400">HTML element</span>
            </div>
            <p className="mb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{purpose}</p>
            <Code>{example}</Code>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-[#090b10] dark:text-white">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-5 py-5">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <a href="#" className="text-lg font-black tracking-tight">
              JSX<span className="text-indigo-500">.</span>LAB
            </a>
            <span className="text-xs text-zinc-500">HTML + React + JavaScript</span>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-16 px-5 py-12">
        <section className="max-w-3xl space-y-5">
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
            Interactive learning reference
          </span>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Understand every <span className="text-indigo-500">element.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A practical reference to HTML elements, JSX syntax, attributes,
            form controls and React conventions. Learn what each thing does
            and how to write it.
          </p>
          <div className="flex flex-wrap gap-2">
            {["HTML elements", "JSX rules", "Attributes", "Real output"].map(item => (
              <span key={item} className="rounded-lg bg-zinc-200 px-3 py-2 text-xs dark:bg-zinc-800">{item}</span>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">Actual browser output</h2>
          <p className="text-sm text-zinc-500">This is rendered UI, not just a code example.</p>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <header className="border-b border-zinc-200 pb-4 dark:border-zinc-700">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Example website</span>
              <h3 className="mt-2 text-2xl font-bold">Welcome to my website</h3>
              <nav className="mt-4 flex flex-wrap gap-4 text-sm text-indigo-600 dark:text-indigo-400">
                <a href="#page-structure">Home</a>
                <a href="#text-and-typography">About</a>
                <a href="#forms-and-inputs">Contact</a>
              </nav>
            </header>

            <div className="grid gap-6 py-6 sm:grid-cols-[1fr_220px]">
              <article className="space-y-3">
                <h4 className="text-xl font-bold">Understanding HTML</h4>
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  HTML provides the structure of a webpage. React uses JSX
                  to describe that interface using familiar HTML-like syntax.
                </p>
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                  Explore elements
                </button>
              </article>
              <aside className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
                <h4 className="font-semibold">Quick facts</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-500">
                  <li>HTML defines structure.</li>
                  <li>CSS defines appearance.</li>
                  <li>React manages UI.</li>
                </ul>
              </aside>
            </div>

            <footer className="border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-700">
              Example footer · 2026
            </footer>
          </div>
        </section>

        <div className="space-y-16">
          {groups.map(group => <Section key={group.title} {...group} />)}
        </div>

        <section id="input-types" className="space-y-5">
          <h2 className="text-2xl font-bold">Input types</h2>
          <p className="text-sm text-zinc-500">The type attribute changes the behavior and appearance of an input.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {inputTypes.map(([type, description]) => (
              <article key={type} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <code className="font-semibold text-indigo-500">{type}</code>
                <p className="my-3 text-sm text-zinc-500">{description}</p>
                <input
                  type={type}
                  placeholder={type === "hidden" ? undefined : `${type} input`}
                  defaultValue={type === "hidden" ? "Hidden value" : undefined}
                  className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-zinc-700"
                />
                {type === "hidden" && <p className="text-xs text-amber-600">Hidden input: intentionally not displayed.</p>}
              </article>
            ))}
          </div>
        </section>

        <section id="attributes" className="space-y-5">
          <h2 className="text-2xl font-bold">HTML attributes in JSX</h2>
          <p className="text-sm text-zinc-500">Attributes configure an element's properties and behavior.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {attributes.map(([name, purpose, example]) => (
              <article key={name} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <code className="font-semibold text-indigo-500">{name}</code>
                <p className="my-2 text-sm text-zinc-500">{purpose}</p>
                <Code>{example}</Code>
              </article>
            ))}
          </div>
        </section>

        <section id="jsx-rules" className="space-y-5">
          <h2 className="text-2xl font-bold">JSX rules and conventions</h2>
          <div className="space-y-3">
            {jsxRules.map(([name, description, example]) => (
              <article key={name} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-semibold">{name}</h3>
                <p className="my-2 text-sm text-zinc-500">{description}</p>
                <Code>{example}</Code>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">React vs HTML elements</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-bold">HTML element</h3>
              <p className="my-3 text-sm text-zinc-500">Built into the browser.</p>
              <Code>{'<button>Save</button>'}</Code>
            </article>
            <article className="rounded-2xl border border-indigo-200 p-5 dark:border-indigo-900">
              <h3 className="font-bold text-indigo-500">React component</h3>
              <p className="my-3 text-sm text-zinc-500">A component you define and reuse.</p>
              <Code>{"<SaveButton />"}</Code>
            </article>
          </div>
          <p className="text-sm leading-7 text-zinc-500">
            HTML elements use lowercase names. React components use PascalCase.
            A React component can contain HTML elements, other React components,
            JavaScript expressions and application logic.
          </p>
        </section>

        <footer className="border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800">
          JSX.LAB · Built for learning React and modern web development.
        </footer>
      </div>
    </main>
  );
}
