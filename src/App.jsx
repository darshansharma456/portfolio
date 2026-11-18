import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2,
  Layers3, Bug, Plus, Check, Trash2, Wallet,
  ListTodo, Brain, RotateCcw
} from 'lucide-react';

const skills = [
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Next.js',
  'C / C++', 'SQL', 'MySQL', 'Git & GitHub',
  'UI/UX fundamentals', 'Manual Testing', 'Networking'
];

const initialTasks = [
  { id: 1, title: 'Review React component patterns', done: true },
  { id: 2, title: 'Build a responsive landing page', done: false },
  { id: 3, title: 'Write test cases for a login form', done: false }
];

const quizQuestions = [
  {
    q: 'Which hook is used to manage local state in a React function component?',
    options: ['useEffect', 'useState', 'useMemo', 'useRef'],
    answer: 1,
    note: 'useState adds state to a function component and returns the current value and setter.'
  },
  {
    q: 'Which HTTP status code usually means “Not Found”?',
    options: ['200', '301', '404', '500'],
    answer: 2,
    note: '404 indicates that the requested resource could not be found.'
  },
  {
    q: 'Which SQL command retrieves records from a table?',
    options: ['SELECT', 'UPDATE', 'INSERT', 'DROP'],
    answer: 0,
    note: 'SELECT reads data from one or more database tables.'
  }
];

const projects = [
  {
    number: '01',
    name: 'TaskFlow',
    type: 'Interactive React App',
    description: 'A lightweight task manager with add, complete and delete actions. Built to demonstrate component state and event handling.',
    tags: ['React', 'useState', 'UI Design'],
    demo: 'tasks'
  },
  {
    number: '02',
    name: 'SpendWise',
    type: 'Interactive React App',
    description: 'A simple expense tracker that totals spending and groups entries by category. Built with local component state and derived data.',
    tags: ['React', 'JavaScript', 'Data UI'],
    demo: 'expenses'
  },
  {
    number: '03',
    name: 'DevQuiz',
    type: 'Interactive React App',
    description: 'A short technical quiz covering React, HTTP and SQL, with instant feedback and a score summary.',
    tags: ['React', 'Logic', 'Quiz UI'],
    demo: 'quiz'
  },
  {
    number: '04',
    name: 'TuberFind',
    type: 'Academic · Computer Vision',
    description: 'A final-year research project exploring tuberculosis detection from chest X-ray images using deep learning, image processing and explainability techniques. Includes an image-upload research UI prototype.',
    tags: ['CNN', 'YOLO', 'TensorFlow', 'Python'],
    demo: 'tuberfind'
  }
];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function TaskFlow() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draft, setDraft] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;

    setTasks(current => [
      ...current,
      { id: Date.now(), title: draft.trim(), done: false }
    ]);
    setDraft('');
  };

  const toggle = id =>
    setTasks(current =>
      current.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );

  return (
    <div className="demo-card">
      <div className="demo-heading">
        <div>
          <span className="eyebrow">LIVE MINI APP / 01</span>
          <h3><ListTodo /> TaskFlow</h3>
        </div>
        <span className="demo-count">
          {tasks.filter(t => t.done).length}/{tasks.length} done
        </span>
      </div>

      <form className="task-form" onSubmit={addTask}>
        <input
          aria-label="New task"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="Add a task..."
          maxLength={70}
        />
        <button aria-label="Add task" type="submit">
          <Plus size={17} />
        </button>
      </form>

      <div className="task-list">
        {tasks.map(task => (
          <div
            className={`task-row ${task.done ? 'is-done' : ''}`}
            key={task.id}
          >
            <button
              className="task-check"
              onClick={() => toggle(task.id)}
              aria-label={task.done ? 'Mark incomplete' : 'Mark complete'}
            >
              {task.done && <Check size={13} />}
            </button>

            <span>{task.title}</span>

            <button
              className="icon-action"
              onClick={() =>
                setTasks(current =>
                  current.filter(t => t.id !== task.id)
                )
              }
              aria-label="Delete task"
            >
              <Trash2 size={15} />
            </button>
          </div>
        ))}
      </div>

      <p className="demo-foot">
        Tasks are held in this page’s React state.
      </p>
    </div>
  );
}

function SpendWise() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Lunch', category: 'Food', amount: 350 },
    { id: 2, name: 'Bus fare', category: 'Transport', amount: 80 },
    { id: 3, name: 'Notebook', category: 'Study', amount: 180 }
  ]);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const total = useMemo(
    () => expenses.reduce((sum, item) => sum + item.amount, 0),
    [expenses]
  );

  const addExpense = e => {
    e.preventDefault();

    const value = Number(amount);

    if (!name.trim() || !Number.isFinite(value) || value <= 0) {
      return;
    }

    setExpenses(items => [
      ...items,
      {
        id: Date.now(),
        name: name.trim(),
        category,
        amount: value
      }
    ]);

    setName('');
    setAmount('');
  };

  return (
    <div className="demo-card">
      <div className="demo-heading">
        <div>
          <span className="eyebrow">LIVE MINI APP / 02</span>
          <h3><Wallet /> SpendWise</h3>
        </div>

        <div className="expense-total">
          <small>TOTAL SPENT</small>
          <strong>रु {total.toLocaleString('en-IN')}</strong>
        </div>
      </div>

      <form className="expense-form" onSubmit={addExpense}>
        <input
          aria-label="Expense name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Expense name"
        />

        <input
          aria-label="Amount in rupees"
          type="number"
          min="1"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount (NPR)"
        />

        <select
          aria-label="Expense category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Study</option>
          <option>Other</option>
        </select>

        <button type="submit">
          Add expense <Plus size={15} />
        </button>
      </form>

      <div className="expense-list">
        {expenses.length ? (
          expenses.map(item => (
            <div className="expense-row" key={item.id}>
              <span className="expense-dot" />

              <div>
                <strong>{item.name}</strong>
                <small>{item.category}</small>
              </div>

              <b>रु {item.amount.toLocaleString('en-IN')}</b>

              <button
                className="icon-action"
                onClick={() =>
                  setExpenses(items =>
                    items.filter(x => x.id !== item.id)
                  )
                }
                aria-label={`Delete ${item.name}`}
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))
        ) : (
          <p className="empty-state">
            No expenses yet. Add one above.
          </p>
        )}
      </div>

      <p className="demo-foot">
        Sample entries are illustrative; amounts are in Nepalese rupees.
      </p>
    </div>
  );
}

function DevQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const current = quizQuestions[index];

  const score = quizQuestions.reduce(
    (sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0),
    0
  );

  const restart = () => {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  };

  return (
    <div className="demo-card">
      <div className="demo-heading">
        <div>
          <span className="eyebrow">LIVE MINI APP / 03</span>
          <h3><Brain /> DevQuiz</h3>
        </div>

        <span className="demo-count">
          {finished
            ? 'Completed'
            : `Question ${index + 1} of ${quizQuestions.length}`}
        </span>
      </div>

      {finished ? (
        <div className="quiz-result">
          <strong>{score}/{quizQuestions.length}</strong>
          <h4>
            {score === quizQuestions.length
              ? 'Excellent work!'
              : 'Nice practice!'}
          </h4>
          <p>
            You answered {score} correctly out of {quizQuestions.length}.
          </p>
          <button className="demo-submit" onClick={restart}>
            <RotateCcw size={15} /> Try again
          </button>
        </div>
      ) : (
        <div className="quiz-body">
          <h4>{current.q}</h4>

          <div className="quiz-options">
            {current.options.map((option, i) => (
              <button
                key={option}
                className={`
                  ${answers[index] === i ? 'selected' : ''}
                  ${answers[index] !== undefined &&
                    i === current.answer ? 'correct' : ''}
                `}
                onClick={() =>
                  setAnswers(a => ({ ...a, [index]: i }))
                }
              >
                {String.fromCharCode(65 + i)}. {option}
              </button>
            ))}
          </div>

          {answers[index] !== undefined && (
            <p className="quiz-note">
              <Check size={14} />
              {answers[index] === current.answer
                ? 'Correct. '
                : 'Not quite. '}
              {current.note}
            </p>
          )}

          <button
            className="demo-submit"
            disabled={answers[index] === undefined}
            onClick={() =>
              index === quizQuestions.length - 1
                ? setFinished(true)
                : setIndex(i => i + 1)
            }
          >
            {index === quizQuestions.length - 1
              ? 'See score'
              : 'Next question'}
            <ArrowUpRight size={15} />
          </button>
        </div>
      )}

      <p className="demo-foot">
        A small knowledge check built with React state.
      </p>
    </div>
  );
}

function TuberFind() {
  const [imageUrl, setImageUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const [message, setMessage] = useState(
    'Choose a chest X-ray image to preview the research interface.'
  );

  const onFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setMessage('Please choose an image file.');
      return;
    }

    if (imageUrl) URL.revokeObjectURL(imageUrl);

    setImageUrl(URL.createObjectURL(file));
    setFileName(file.name);

    setMessage(
      'Image preview loaded. The trained detection model is not connected to this portfolio demo.'
    );
  };

  const clear = () => {
    if (imageUrl) URL.revokeObjectURL(imageUrl);

    setImageUrl('');
    setFileName('');

    setMessage(
      'Choose a chest X-ray image to preview the research interface.'
    );
  };

  return (
    <div className="demo-card tuberfind-demo">
      <div className="demo-heading">
        <div>
          <span className="eyebrow">RESEARCH SHOWCASE / 04</span>
          <h3><Layers3 /> TuberFind</h3>
        </div>
        <span className="demo-count">Prototype UI</span>
      </div>

      <p className="tuber-intro">
        A portfolio preview of the chest X-ray research workflow.
        Select an image to see the upload and preview experience.
      </p>

      <label className="upload-zone">
        <input type="file" accept="image/*" onChange={onFile} />
        <span className="upload-icon"><Plus /></span>
        <strong>Choose an X-ray image</strong>
        <small>
          Image files only · preview stays in this browser session
        </small>
      </label>

      {imageUrl && (
        <div className="xray-preview">
          <img src={imageUrl} alt="Selected image preview" />
          <div>
            <strong>{fileName}</strong>
            <button className="icon-action" onClick={clear}>
              Remove image
            </button>
          </div>
        </div>
      )}

      <div className="tuber-status">
        <span className="status-dot" />
        <p>{message}</p>
      </div>

      <div className="research-note">
        <strong>Research integrity note</strong>
        <p>
          This is an interface prototype only. It does not run a CNN or
          YOLO model, generate a TB prediction, or provide medical advice.
          A validated model and clinical evaluation would need to be
          integrated before any inference feature could be offered.
        </p>
      </div>

      <p className="demo-foot">
        Academic project showcase · CNN classification · YOLO-based
        localization (as explored in the research project)
      </p>
    </div>
  );
}

function ProjectDemo({ type }) {
  if (type === 'tasks') return <TaskFlow />;
  if (type === 'expenses') return <SpendWise />;
  if (type === 'quiz') return <DevQuiz />;
  if (type === 'tuberfind') return <TuberFind />;
  return null;
}

export default function App() {
  const [activeDemo, setActiveDemo] = useState('tasks');

  const selectedProject = projects.find(
    project => project.demo === activeDemo
  );

  return (
    <div className="site-shell">
      <header className="nav wrap">
        <a className="brand" href="#home">DS<span>.</span></a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="intro">HELLO, I’M</p>

            <h1>
              Darshan<br />
              <span>Sharma.</span>
            </h1>

            <p className="hero-sub">
              Computer Engineer crafting thoughtful digital experiences
              through frontend development and quality-focused engineering.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={15} /> Kathmandu, Nepal</span>
              <span><Code2 size={15} /> React · Web · QA</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="code-card">
              <div className="code-top">
                <i /><i /><i />
                <span>developer.js</span>
              </div>

              <div className="code-lines">
                <p><b>01</b> <em>const</em> developer = {'{'}</p>
                <p><b>02</b> &nbsp; name: <strong>'Darshan'</strong>,</p>
                <p><b>03</b> &nbsp; role: <strong>'Computer Engineer'</strong>,</p>
                <p><b>04</b> &nbsp; focus: [</p>
                <p><b>05</b> &nbsp;&nbsp; <strong>'React'</strong>, <strong>'UI/UX'</strong>,</p>
                <p><b>06</b> &nbsp;&nbsp; <strong>'Quality'</strong></p>
                <p><b>07</b> &nbsp; ]</p>
                <p><b>08</b> {'}'}</p>
              </div>

              <div className="code-status">
                <span /> AVAILABLE FOR NEW PROJECTS
              </div>
            </div>

            <div className="float-chip chip-react">⚛ React</div>
            <div className="float-chip chip-ui">✳ UI / UX</div>
            <div className="hero-glow" />
          </div>

          <a className="scroll-cue" href="#about">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </section>

        <section className="section wrap" id="about">
          <SectionTitle
            eyebrow="01 / ABOUT ME"
            title="Engineering with curiosity."
          >
            A little about the person behind the code.
          </SectionTitle>

          <div className="about-grid">
            <div className="about-lead">
              I’m a recent Computer Engineering graduate from Tribhuvan
              University, based in Kathmandu, Nepal.
            </div>

            <div className="about-detail">
              <p>
                I enjoy solving logical problems and building useful,
                user-friendly web experiences. I’m developing my skills
                in React and modern frontend practices, while also
                bringing an interest in software quality, testing and
                reliable systems.
              </p>

              <p>
                I’m looking for opportunities where I can learn,
                contribute and grow with a collaborative team.
              </p>

              <a className="text-link" href="#contact">
                Connect with me <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="stats">
            <div><strong>2026</strong><span>Graduate year</span></div>
            <div><strong>B.E.</strong><span>Computer Engineering</span></div>
            <div><strong>01</strong><span>Curious mindset</span></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="wrap">
            <SectionTitle
              eyebrow="02 / TOOLKIT"
              title="Skills I’m building with."
            >
              A growing toolkit for creating and testing digital products.
            </SectionTitle>

            <div className="skill-layout">
              <div className="skill-card">
                <Code2 />
                <h3>Frontend</h3>
                <p>Building responsive, component-based interfaces.</p>
              </div>

              <div className="skill-card">
                <Layers3 />
                <h3>Development</h3>
                <p>Programming fundamentals, databases and version control.</p>
              </div>

              <div className="skill-card">
                <Bug />
                <h3>Quality & Systems</h3>
                <p>Testing mindset, troubleshooting and networking basics.</p>
              </div>
            </div>

            <div className="skill-tags">
              {skills.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section wrap" id="projects">
          <SectionTitle
            eyebrow="03 / SELECTED WORK"
            title="Projects & practice."
          >
            Four portfolio projects, including three interactive React
            apps and a TuberFind research-interface prototype.
          </SectionTitle>

          <div className="project-list">
            {projects.map(project => (
              <article
                className={`project ${
                  project.demo === activeDemo ? 'active-project' : ''
                }`}
                key={project.number}
              >
                <span className="project-number">{project.number}</span>

                <div className="project-main">
                  <span className="eyebrow">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <button
                  className="project-link"
                  onClick={() => setActiveDemo(project.demo)}
                  aria-label={`Try ${project.name}`}
                >
                  <ArrowUpRight />
                </button>
              </article>
            ))}
          </div>

          <div className="demo-switcher">
            <span className="eyebrow">TRY THE PROJECTS</span>

            <div className="demo-tabs">
              {projects.filter(p => p.demo).map(p => (
                <button
                  key={p.demo}
                  className={activeDemo === p.demo ? 'active' : ''}
                  onClick={() => setActiveDemo(p.demo)}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <ProjectDemo type={activeDemo} />

          <p className="small-note">
            TaskFlow, SpendWise and DevQuiz are original interactive
            portfolio demos. TuberFind includes an image-preview interface
            only; no AI inference is connected. SpendWise uses sample NPR
            amounts. These demos run in the browser and do not send data
            to a server.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-inner">
            <span className="eyebrow">04 / CONTACT</span>

            <h2>
              Have an idea?<br />
              <span>Let’s build it.</span>
            </h2>

            <p>
              I’m open to entry-level opportunities, collaborations
              and conversations about technology.
            </p>

            <a
              className="button primary"
              href="mailto:sharmadarshan3467@gmail.com"
            >
              Say hello <Mail size={17} />
            </a>

            <div className="socials">
              <a
                href="https://github.com/darshansharma456 "
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/darshan-sharma-a1b3012b5/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a className="brand" href="#home">DS<span>.</span></a>
        <span>Designed & built with React by Darshan Sharma.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}